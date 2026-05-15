# Голос клиента и CX — Executive Command Center

Production-grade executive CX intelligence dashboard for bank leadership: president, CEO, board, CDTO, Head of CX, retail leadership and executive management.

## Links

- GitHub: https://github.com/memelya/cx-voice-of-customer-dashboard
- Live: https://cx-voice-of-customer-dashboard.vercel.app

## Design philosophy

- **Signal > noise**: numbers, deltas, trends and risk heat instead of marketing copy.
- **30–90 second executive readout**: current CX state, previous state, what improved, what worsened, why, and what to do next.
- **Bloomberg + Apple + Stripe + McKinsey dashboard** aesthetic: premium, calm, dense, analytical.
- **Synthetic enterprise-grade data**: realistic, correlated, causally believable banking CX model.

## Architecture

```text
app/                  Next.js app router pages and global styles
components/           Dashboard shell and reusable chart components
content/cx-data.ts    Synthetic banking CX dataset and model
lib/                  Shared utilities
public/               Static assets
```

## Metrics model

The dashboard covers:

- CX Health Score, NPS, CSI, retention, churn risk
- Digital satisfaction, complaints, resolution time
- Voice-of-customer pain points and sentiment evolution
- Journey health: onboarding, mobile app, cards, payments, support, loans, mortgage, branch, call center
- Root cause impact ranking and confidence
- Initiative before/after impact and ROI
- Recommendation priority matrix
- Segment and channel CX comparisons
- Future scenario simulation

## Tech stack

- Next.js + TypeScript
- Tailwind CSS
- shadcn/ui-style component primitives
- Framer Motion
- Recharts
- Lucide Icons

## Local development

```bash
npm install
npm run dev
npm run build
```

## Deployment

Preferred target: **Vercel**.

```bash
npm run build
```

Then connect the GitHub repository to Vercel or deploy via the Vercel CLI/API using secure environment secrets. Do not commit `.env`, tokens, `.vercel/`, build output or logs.

## Synthetic data explanation

All data is synthetic and generated to behave like an enterprise banking CX dataset:

- complaint spikes are linked to onboarding KYC latency and support SLA breaches;
- card delivery improves after ETA synchronization initiative;
- premium retention improves after priority chat rollout;
- mortgage remains high-effort due to document rework loops;
- future scenarios project NPS, retention and churn changes based on prioritized operational fixes.

No real customer data is included.
