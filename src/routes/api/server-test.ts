import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/server-test')({
  server: {
    handlers: {
      GET: async () =>
        Response.json({
          success: true,
          message: 'Nitro server API is working',
          timestamp: new Date().toISOString(),
        }),
    },
  },
})
