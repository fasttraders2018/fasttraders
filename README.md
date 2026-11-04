# Fast Traders website

## Run locally

Requires Node.js 20.19+ or 22.12+.

1. Install dependencies with `npm ci`.
2. Start the development server with `npm run dev`.
3. Open the local URL printed by Vite (normally `http://localhost:5173`).

The site can be viewed without Supabase credentials. To enable quote submissions, copy `.env.example` to `.env.local`, fill in the project's Supabase URL and anon key, and apply the SQL migration in `supabase/migrations`. Restart the development server after changing environment variables. Without these values, the quote form shows a message directing visitors to the phone/email/WhatsApp contacts instead.

## Checks

- `npm run lint`
- `npm run typecheck`
- `npm run build`
