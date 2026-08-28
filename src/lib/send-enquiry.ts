export type EnquiryType = "quote" | "account" | "tender";

export const ENQUIRY_SUCCESS =
  "Thank you for your enquiry. We have received your request and will get back to you shortly.";

export async function sendEnquiry(
  type: EnquiryType,
  fields: Record<string, string>,
  honeypot = "",
): Promise<void> {
  let res: Response;
  try {
    res = await fetch("/api/public/enquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, fields, _hp: honeypot }),
    });
  } catch {
    throw new Error("Network error — please check your connection and try again.");
  }

  let data: { success?: boolean; error?: string } = {};
  try {
    data = await res.json();
  } catch {
    /* non-JSON response */
  }

  if (!res.ok || !data.success) {
    throw new Error(data.error || "We could not send your enquiry. Please try again or call us on 031 564 8340.");
  }
}
