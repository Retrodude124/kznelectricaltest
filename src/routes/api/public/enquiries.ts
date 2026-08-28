import { createFileRoute } from '@tanstack/react-router'

type EnquiryType = 'quote' | 'account' | 'tender'

const LABELS: Record<EnquiryType, { subject: string; heading: string; detailsHeading: string }> = {
  quote: { subject: 'New Website Quote Request', heading: 'NEW QUOTE REQUEST', detailsHeading: 'Quote Details' },
  account: { subject: 'New Account Enquiry', heading: 'NEW ACCOUNT ENQUIRY', detailsHeading: 'Enquiry Details' },
  tender: { subject: 'New Tender Enquiry', heading: 'NEW TENDER ENQUIRY', detailsHeading: 'Tender Details' },
}

const CONTACT_KEYS = ['name', 'company', 'email', 'phone']

const FIELD_LABELS: Record<string, string> = {
  name: 'Name',
  company: 'Company',
  email: 'Email',
  phone: 'Phone',
  service: 'Service required',
  propertyType: 'Property type',
  urgency: 'Urgency',
  details: 'Project details',
  message: 'Enquiry',
}

const label = (k: string) =>
  FIELD_LABELS[k] ?? k.replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase())

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function jsonError(message: string, status: number) {
  return Response.json({ success: false, error: message }, { status })
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)
}

function buildBodies(type: EnquiryType, fields: Record<string, string>, submitted: string) {
  const l = LABELS[type]
  const contact = Object.entries(fields).filter(([k]) => CONTACT_KEYS.includes(k))
  const rest = Object.entries(fields).filter(([k]) => !CONTACT_KEYS.includes(k))

  const line = (k: string, v: string) => `${label(k)}: ${v}`
  const text = [
    l.heading,
    '',
    'Contact Information',
    '------------------',
    ...contact.map(([k, v]) => line(k, v)),
    '',
    l.detailsHeading,
    '-'.repeat(l.detailsHeading.length),
    ...rest.map(([k, v]) => line(k, v)),
    '',
    'Submitted:',
    submitted,
  ].join('\n')

  const section = (title: string, rows: [string, string][]) => `
    <h2 style="font:600 13px/1.4 Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#0b6fd1;margin:24px 0 8px">${escapeHtml(title)}</h2>
    <table style="border-collapse:collapse;width:100%">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="padding:6px 12px 6px 0;font:400 14px Arial,sans-serif;color:#666;vertical-align:top;white-space:nowrap">${escapeHtml(label(k))}</td><td style="padding:6px 0;font:600 14px Arial,sans-serif;color:#111;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`,
        )
        .join('')}
    </table>`

  const html = `<!doctype html><html><body style="background:#ffffff;margin:0;padding:24px">
    <div style="max-width:600px;margin:0 auto">
      <h1 style="font:700 20px Arial,sans-serif;color:#111;margin:0">${escapeHtml(l.heading)}</h1>
      ${section('Contact Information', contact as [string, string][])}
      ${section(l.detailsHeading, rest as [string, string][])}
      <p style="font:400 12px Arial,sans-serif;color:#888;margin-top:24px">Submitted: ${escapeHtml(submitted)}</p>
    </div></body></html>`

  return { text, html, subject: l.subject }
}

export const Route = createFileRoute('/api/public/enquiries')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env['RESEND_API_KEY']
        const to = process.env['ENQUIRY_EMAIL_TO']
        const from = process.env['ENQUIRY_EMAIL_FROM']
        if (!apiKey || !to || !from) {
          console.error('Email enquiry misconfigured: RESEND_API_KEY / ENQUIRY_EMAIL_TO / ENQUIRY_EMAIL_FROM missing')
          return jsonError('Email sending is not configured on the server.', 500)
        }

        let payload: unknown
        try {
          payload = await request.json()
        } catch {
          return jsonError('Invalid request body.', 400)
        }
        if (typeof payload !== 'object' || payload === null) return jsonError('Invalid request body.', 400)

        const body = payload as Record<string, unknown>
        const type = body['type']
        if (type !== 'quote' && type !== 'account' && type !== 'tender') {
          return jsonError('Unknown enquiry type.', 400)
        }

        // Honeypot — bots fill hidden fields.
        if (typeof body['_hp'] === 'string' && body['_hp'].trim() !== '') {
          return Response.json({ success: true })
        }

        const rawFields = body['fields']
        if (typeof rawFields !== 'object' || rawFields === null) return jsonError('Missing form fields.', 400)

        const fields: Record<string, string> = {}
        for (const [k, v] of Object.entries(rawFields as Record<string, unknown>)) {
          if (v === undefined || v === null) continue
          const s = String(v).trim()
          if (!s) continue
          if (s.length > 5000) return jsonError(`${label(k)} is too long.`, 400)
          if (k.length > 60) return jsonError('Invalid form field.', 400)
          fields[k] = s
        }

        const name = fields['name']
        const email = fields['email']
        if (!name || name.length > 120) return jsonError('Please provide your name.', 400)
        if (!email || !EMAIL_RE.test(email) || email.length > 255) {
          return jsonError('Please provide a valid email address.', 400)
        }
        const message = fields['message'] ?? fields['details']
        if (Object.keys(fields).length < 3) return jsonError('Please complete the form before submitting.', 400)
        if ((type === 'account' || type === 'tender') && (!message || message.length < 5)) {
          return jsonError('Please describe your enquiry.', 400)
        }
        // Obvious spam heuristics
        const blob = Object.values(fields).join(' ')
        const links = blob.match(/https?:\/\//gi)?.length ?? 0
        if (links > 4) return jsonError('Your message was rejected as spam.', 400)

        const submitted = new Date().toISOString().replace('T', ' ').slice(0, 19) + ' UTC'
        const { text, html, subject } = buildBodies(type, fields, submitted)

        try {
          const res = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
            body: JSON.stringify({
              from,
              to: [to],
              subject,
              text,
              html,
              reply_to: email,
            }),
          })
          if (!res.ok) {
            const errBody = await res.text()
            console.error(`Resend send failed [${res.status}]: ${errBody}`)
            return jsonError('We could not send your enquiry right now. Please try again or call us.', 502)
          }
        } catch (e) {
          console.error('Resend request threw', e)
          return jsonError('We could not send your enquiry right now. Please try again or call us.', 502)
        }

        return Response.json({ success: true })
      },
    },
  },
})
