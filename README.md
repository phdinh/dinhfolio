# Dinhfolio

A production-minded personal portfolio built with Next.js and TypeScript.

The public experience presents selected engineering work clearly for hiring managers, collaborators, and clients. An optional coffee-inspired “Off Menu” route rewards curiosity with a personal interactive experience.

## Featured work

- **Long Black OS** — A branded loyalty and customer-experience platform for a specialty café, designed as a modern layer around Square POS.
- **Bilingual Wedding Site** — A custom, accessible bilingual wedding experience with an editorial visual system.
- **Ground Systems Simulator** — An operations-focused interface for interpreting complex system data and supporting informed decisions.
- **Optional:** Algorithm visualizer or engineering notebook.
- **Optional:** Slack bot.
- **Optional:** AI Kdrama recommendation system
- **Optional:** MBTI quiz

## Product principles

- Make the work easy to evaluate in under a minute.
- Show context, constraints, architecture, and trade-offs.
- Keep the experience minimal, accessible, fast, and intentional.
- Use coffee as subtle world-building around the professional portfolio.
- Build the portfolio people need first; build the secret people remember second.

## Stack

### Current

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- ESLint
- Prettier
- Vercel deployment

### Planned as the product grows

- PostgreSQL
- Prisma ORM
- Zod validation
- Auth.js or Clerk for private admin access
- Object storage for media
- Sentry and privacy-conscious analytics

## Routes

| Route          | Purpose                                                                   |
| -------------- | ------------------------------------------------------------------------- |
| `/`            | Positioning, selected work, and the hero interaction                      |
| `/work`        | Project index                                                             |
| `/work/[slug]` | Full case studies                                                         |
| `/about`       | Personal background and working style                                     |
| `/contact`     | Contact form and direct links                                             |
| `/off-menu`    | Optional hidden route for coffee notes, interests, and a mini interaction |
| `/admin`       | Future private content-management area                                    |

## Local development

### Prerequisites

- Node.js 20 or newer
- npm

### Start the app

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Quality checks

```bash
npm run lint
npm run typecheck
npm run format:check
npm run build
```

## Environment variables

Copy the example file before adding any local configuration:

```bash
cp .env.example .env.local
```

Never commit `.env.local` or real credentials.

## Accessibility and performance

The project aims for:

- Semantic HTML and keyboard-accessible interactions
- WCAG AA color contrast and visible focus states
- Touch-friendly controls and responsive layouts
- Support for `prefers-reduced-motion`
- Lightweight initial loading; interactive Off Menu code loads only when needed

## Status

Phase 0: repository, developer tooling, deployment foundation, and design system setup.

---

Built with care. Brewed with curiosity.
EOF
