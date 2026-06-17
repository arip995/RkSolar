# RK SOLAR

Modern Next.js landing page for RK SOLAR, a solar energy company focused on lead generation for
solar panel installation, consultation, maintenance, and clean energy solutions.

## Features

- Responsive premium landing page built with Next.js and Tailwind CSS
- Reusable sections: Header, Hero, About, Services, Benefits, Projects, Stats, Contact, Footer
- Smooth scrolling, hover effects, and subtle reveal animations
- SEO metadata for the RK SOLAR brand
- Contact form with client/server validation, loading state, and success/error messaging
- Nodemailer API route that sends leads to `rksolar@gmail.com`

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Contact form email setup

Create a `.env.local` file using `.env.example` as a reference:

```bash
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
SMTP_FROM="RK SOLAR Website <your-smtp-username>"
```

The form posts to `/api/contact`, validates all fields, and sends the lead details to
`rksolar@gmail.com`.

## Deploying to Vercel

This repository is a Next.js app at the repository root. In Vercel, use these settings:

- Framework Preset: `Next.js`
- Root Directory: `.`
- Install Command: `npm ci`
- Build Command: `npm run build`
- Output Directory: leave empty / Vercel default

Required environment variables for the contact form:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM`

### Fixing `404: NOT_FOUND` on Vercel

If Vercel shows `404: NOT_FOUND`, check these first:

1. Make sure Vercel is deploying the branch that contains the app files (`app/`, `package.json`,
   `next.config.ts`). The current app exists on the `cursor/rk-solar-landing-page-0209` branch
   until it is merged to `main`.
2. In Vercel Project Settings, confirm Root Directory is the repository root (`.`), not a nested
   folder.
3. Do not set a custom Output Directory such as `dist`, `out`, or `.next`; leave it as the Vercel
   default for Next.js.
4. Redeploy after changing the Git branch or project settings.
