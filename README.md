# Balasubramani P Portfolio

A futuristic, recruiter-focused React portfolio for an AI & Machine Learning Engineer with healthcare AI, NLP, and full-stack deployment experience.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env` and set your EmailJS values:
   ```bash
   cp .env.example .env
   ```

3. Add your EmailJS configuration:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

4. Run the dev server:
   ```bash
   npm run dev
   ```

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Deploy

This app can be deployed on Vercel, Netlify, or any static site host that supports Vite.

### Vercel

- Connect the repository to Vercel.
- Add environment variables in the project settings.
- Set the build command to `npm run build`.
- Set the output directory to `dist`.

### Netlify

- Connect the repository to Netlify.
- Add environment variables in Site settings > Build & deploy > Environment.
- Set the build command to `npm run build`.
- Set the publish directory to `dist`.

## Notes

- The contact form uses EmailJS and requires valid environment variables.
- The app already includes a polished hero section, skills, projects, experience, education, and contact sections.
