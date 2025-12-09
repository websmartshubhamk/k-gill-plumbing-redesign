# K Gill Plumbing & Heating Website

Professional plumbing and heating services website built with Next.js.

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwebsmartshubhamk%2Fk-gill-plumbing-redesign&project-name=k-gill-plumbing&repository-name=k-gill-plumbing-redesign)

## Development

```bash
# Install dependencies
npm install

# Run development server (not recommended for Claude instances)
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your values:

- `NEXT_PUBLIC_SITE_URL` - Your production URL
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL (optional)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anon key (optional)
- `WHATSAPP_PHONE_NUMBER` - WhatsApp business number

## Tech Stack

- Next.js 15.1.5+
- TypeScript
- Tailwind CSS
- React Hook Form
- Framer Motion
- Radix UI