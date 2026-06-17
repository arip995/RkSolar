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
