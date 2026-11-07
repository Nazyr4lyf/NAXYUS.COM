# NAXYUS PRO MAX v2.5.0

The NAXYUS PRO MAX replacement site is being integrated into this repository on the `pro-max-integration` branch. The existing `main` branch and live deployment remain unchanged until validation and approval.

## Stack
- Next.js App Router, React and TypeScript
- Responsive dark NAXYUS identity: blue `#155EEF`, cyan `#00D9FF`, violet `#5B1FEF`
- Native WebGL hero with CSS fallback and reduced-motion safeguards
- SEO metadata, sitemap, robots, JSON-LD and installability manifest
- Contact form validation, honeypot and same-origin checks; optional Resend delivery

## Local setup
Requires Node.js 22.6+ and npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Validation
```bash
npm run verify:project
npm test
npm run lint
npm run typecheck
npm run build
```

The full release gate is `npm run check`. Do not publish until all checks pass and desktop/mobile, accessibility, WebGL fallback, contact email delivery and Vercel preview are verified.

## Contact configuration
Set `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`, and `NEXT_PUBLIC_SITE_URL` in the deployment environment. Never commit real secrets or expose private keys via `NEXT_PUBLIC_` variables.

## Release status
The project source has passed source-level verification and its dependency-free automated tests in the build workspace. A complete Next.js production build and real-device QA have not yet been confirmed. The contact endpoint's in-memory limiter is not a substitute for a shared production rate limiter/WAF.

## Product status
The portfolio includes 13 project directions. Descriptions must remain honest: inclusion in the portfolio does not imply that every product is deployed, certified or production-ready.

## Integration safety
All work is being staged on `pro-max-integration`. Do not merge to `main` or change the live deployment until the integrated repository has passed its release gate and the owner has reviewed the preview.
