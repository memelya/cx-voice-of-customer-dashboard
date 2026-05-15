# CX Executive Dashboard Documentation

## Purpose

“Голос клиента и CX” is an executive-level CX command center for bank leadership. It is not a corporate landing page. It is designed to answer in 30–90 seconds:

1. Current CX condition.
2. Historical CX movement.
3. What improved.
4. What worsened.
5. Why it happened.
6. What actions will improve CX metrics.
7. Where the biggest business upside is.

## Storytelling logic

The page follows an executive decision narrative:

1. **Executive overview** — CX Health, NPS, CSI, retention, churn risk, digital satisfaction, complaints and resolution time.
2. **CX over time** — quarterly/monthly trendline with complaint overlays.
3. **Voice of customer** — top pain points, volume, trend and NPS impact.
4. **Customer journeys** — health view across onboarding, mobile, cards, payments, support, loans, mortgage, branch and call center.
5. **Root cause analytics** — impact-ranked operational, product and process failures.
6. **What improved CX** — initiative before/after and ROI readout.
7. **What to do next** — recommendation engine and priority matrix.
8. **Segments / channels** — CX risk by client group.
9. **Executive insights** — ultra-short AI-style board signals.
10. **Future CX scenarios** — projected NPS, retention and churn under improvement scenarios.

## Synthetic data model

The dataset is located at `content/cx-data.ts` and includes:

- NPS history;
- CSI history;
- retention and churn risk;
- complaint volume;
- app ratings;
- journey analytics;
- support SLA and resolution proxy metrics;
- pain point volumes;
- root cause chains;
- initiative before/after impact;
- segment/channel risk;
- scenario simulation.

Data is synthetic, non-random and causally connected. Example assumptions:

- KYC latency increases onboarding abandonment and complaints.
- Support wait time is the largest churn driver.
- ETA synchronization reduces card delivery complaints.
- Priority chat improves premium retention.
- Mortgage document loops increase effort score and reduce satisfaction.

## Design system

Visual principles:

- dark executive cockpit for first-screen command center;
- light analytical workspace for journey/root-cause/action sections;
- high contrast metric typography;
- compact KPI cards;
- subtle glassmorphism;
- minimal gradients;
- tabular numeric rendering;
- restrained motion;
- accessible semantic structure.

Primary visual language:

- teal = positive / improvement;
- rose = deterioration / risk;
- amber = warning / watchlist;
- blue = digital/product signal.

## Components

- `DashboardShell` — complete page composition and section logic.
- `charts.tsx` — Recharts visualizations: sparklines, time-series, radar, bar, priority matrix and scenario chart.
- `cx-data.ts` — synthetic executive banking CX dataset.
- `utils.ts` — className merge and formatting helpers.

## Deployment

Recommended deployment: Vercel.

Safe workflow:

1. Work on `feature/cx-voice-dashboard`.
2. Build locally: `npm run build`.
3. Commit with a clear message.
4. Push via secure helper/API; do not log tokens.
5. Open PR into `main`.
6. Deploy to Vercel after approval.
7. Add GitHub URL and live URL to README after deployment.

## Future extensions

- Real data ingestion from surveys, app telemetry, call center, CRM and complaint systems.
- Role-specific board / CX / retail views.
- Drill-down from root cause to customer verbatims.
- Journey-level cohort analysis.
- Real-time SLA breach alerts.
- AI-generated executive narrative with evidence links.
- Scenario model calibrated with historical elasticity.
