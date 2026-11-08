# NAXYUS PRO MAX v2.5.0

The NAXYUS PRO MAX replacement is being integrated in this repository on `pro-max-integration`. The original HTML pages and brand assets are retained. The production `main` branch remains unchanged until the release gate passes and the preview is reviewed.

## Stack
- Next.js App Router, React and TypeScript
- Responsive NAXYUS identity: blue `#155EEF`, cyan `#00D9FF`, violet `#5B1FEF`
- Native WebGL hero with CSS fallback and a reduced-motion-friendly static render
- SEO metadata, dynamic project detail pages, sitemap, robots and installability manifest
- Contact validation, honeypot and same-origin checks; optional Resend delivery

## Portfolio
The directory currently presents 16 project directions discovered from the existing portfolio and accessible GitHub repositories: VoteChain, WardPlus (formerly WardPulse), PharmaShield, SafeLoop, School Management System, A.K.A ANNUR Hospital Management System, Hotel Management System, Rabiyul Auwal, BAUCHI Maulud Distribution Hub, DORTIXP, LINGORA, MATAWALLEE KIDS COLLECTIONS, Nazeer AI Studio, VisionTrade AI Assistant, SHA’IRAN ANNABI Membership System and DARHAM Bread Bakery.

Descriptions distinguish repository-backed work from concepts and frontend foundations. Portfolio inclusion does not imply that a product is deployed, certified or production-ready.

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

The release gate is `npm run check`. GitHub Actions runs this gate on pushes to `main` and `pro-max-integration`, and on pull requests to `main`.

## Contact configuration
Set `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL` and `NEXT_PUBLIC_SITE_URL` in Vercel or local environment settings. Never commit real secrets or expose private keys via `NEXT_PUBLIC_` variables. The contact route requires a verified sender domain in Resend. A shared production rate limiter/WAF should be configured before public launch.

## Release status
The initial Next.js production build succeeded and exposed an ESLint configuration issue; that configuration has been corrected and the CI gate is running. Desktop/mobile QA, accessibility review, live contact delivery, WebGL fallback testing and final preview review remain release requirements.

## Integration safety
Keep work on `pro-max-integration` until CI passes, the Vercel preview is reviewed and the owner approves merging to `main`. Do not replace the production site before those gates pass.
