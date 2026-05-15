export type TrendPoint = { period: string; nps: number; csi: number; retention: number; complaints: number; app: number; churnRisk: number };

export const overview = {
  health: 74,
  nps: 42,
  csi: 83,
  retention: 91.6,
  churnRisk: 6.8,
  digitalSat: 4.34,
  complaintTrend: 18,
  resolutionTime: 7.4,
  confidence: 94,
  updated: "Today 08:30"
};

export const kpis = [
  { label: "CX Health", value: "74", suffix: "/100", delta: +5, tone: "good", hint: "QoQ" },
  { label: "NPS", value: "42", suffix: "", delta: +8, tone: "good", hint: "YoY" },
  { label: "CSI", value: "83", suffix: "%", delta: +3, tone: "good", hint: "MoM" },
  { label: "Retention", value: "91.6", suffix: "%", delta: +1.9, tone: "good", hint: "QoQ" },
  { label: "Churn risk", value: "6.8", suffix: "%", delta: -1.4, tone: "good", hint: "MoM" },
  { label: "Digital satisfaction", value: "4.34", suffix: "/5", delta: -0.08, tone: "risk", hint: "WoW" },
  { label: "Complaints", value: "+18", suffix: "%", delta: +18, tone: "bad", hint: "MoM" },
  { label: "Resolution time", value: "7.4", suffix: "h", delta: -2.1, tone: "good", hint: "MoM" }
];

export const cxHistory: TrendPoint[] = [
  { period: "Q1 25", nps: 31, csi: 76, retention: 88.4, complaints: 142, app: 4.08, churnRisk: 9.8 },
  { period: "Q2 25", nps: 33, csi: 77, retention: 88.9, complaints: 136, app: 4.12, churnRisk: 9.3 },
  { period: "Q3 25", nps: 29, csi: 74, retention: 87.8, complaints: 166, app: 3.96, churnRisk: 10.7 },
  { period: "Q4 25", nps: 34, csi: 78, retention: 89.4, complaints: 151, app: 4.11, churnRisk: 9.1 },
  { period: "Jan", nps: 36, csi: 79, retention: 89.8, complaints: 144, app: 4.18, churnRisk: 8.8 },
  { period: "Feb", nps: 39, csi: 81, retention: 90.6, complaints: 128, app: 4.29, churnRisk: 7.7 },
  { period: "Mar", nps: 43, csi: 84, retention: 91.9, complaints: 111, app: 4.42, churnRisk: 6.1 },
  { period: "Apr", nps: 41, csi: 82, retention: 91.2, complaints: 125, app: 4.36, churnRisk: 6.9 },
  { period: "May", nps: 42, csi: 83, retention: 91.6, complaints: 133, app: 4.34, churnRisk: 6.8 }
];

export const painPoints = [
  { issue: "Mobile onboarding verification", volume: 18400, change: 42, impact: "-5.8 NPS", risk: 86 },
  { issue: "Support SLA breaches", volume: 12100, change: 27, impact: "-4.1 NPS", risk: 78 },
  { issue: "Card delivery ETA mismatch", volume: 8200, change: -31, impact: "+2.3 NPS", risk: 38 },
  { issue: "Mortgage document loops", volume: 6100, change: 18, impact: "-2.7 NPS", risk: 64 },
  { issue: "ATM cash availability", volume: 3900, change: -12, impact: "+0.8 NPS", risk: 31 }
];

export const journeys = [
  { name: "Onboarding", sat: 71, drop: 18, pain: 84, trend: -9, resolution: 62, effort: 4.1 },
  { name: "Mobile app", sat: 79, drop: 9, pain: 58, trend: -3, resolution: 78, effort: 3.0 },
  { name: "Cards", sat: 86, drop: 5, pain: 32, trend: 11, resolution: 89, effort: 2.1 },
  { name: "Payments", sat: 88, drop: 3, pain: 27, trend: 4, resolution: 92, effort: 1.9 },
  { name: "Support", sat: 68, drop: 14, pain: 79, trend: -12, resolution: 61, effort: 4.4 },
  { name: "Loans", sat: 76, drop: 12, pain: 63, trend: 2, resolution: 74, effort: 3.6 },
  { name: "Mortgage", sat: 64, drop: 23, pain: 88, trend: -6, resolution: 55, effort: 4.8 },
  { name: "Branch", sat: 81, drop: 7, pain: 43, trend: 5, resolution: 83, effort: 2.8 },
  { name: "Call center", sat: 70, drop: 16, pain: 76, trend: -8, resolution: 64, effort: 4.2 }
];

export const rootCauses = [
  { cause: "KYC vendor latency", driver: "Onboarding", impact: 19, confidence: 91, chain: "App wait → retry → abandon → complaint" },
  { cause: "Understaffed tier-2 support", driver: "Support", impact: 17, confidence: 88, chain: "Queue > 18m → SLA breach → detractor" },
  { cause: "Mortgage checklist ambiguity", driver: "Mortgage", impact: 13, confidence: 82, chain: "Missing doc → rework loop → effort" },
  { cause: "Release 8.14 crash on older Android", driver: "Mobile app", impact: 11, confidence: 86, chain: "Crash → payment failure → complaint" },
  { cause: "Courier ETA data mismatch", driver: "Cards", impact: -8, confidence: 79, chain: "Fixed ETA sync → fewer calls" }
];

export const initiatives = [
  { name: "Card logistics ETA sync", status: "Scaled", before: 74, after: 86, roi: "3.8x", impact: "+2.3 NPS" },
  { name: "Priority chat for premium", status: "Scaled", before: 81, after: 90, roi: "2.9x", impact: "+1.7 retention" },
  { name: "One-screen loan status", status: "Pilot", before: 69, after: 77, roi: "1.8x", impact: "-14% calls" },
  { name: "KYC fallback routing", status: "Ready", before: 71, after: 82, roi: "4.1x", impact: "+5.8 NPS potential" }
];

export const recommendations = [
  { action: "Снизить support first response с 18m до 5m", impact: "+11 NPS", value: "₽420m retained", urgency: 96, complexity: 54 },
  { action: "KYC fallback для onboarding в mobile", impact: "+7 NPS", value: "+38k completed accounts", urgency: 91, complexity: 61 },
  { action: "Mortgage doc checklist + proactive alerts", impact: "+4 CSI", value: "-22% rework", urgency: 78, complexity: 43 },
  { action: "Android crash hotfix + cohort monitoring", impact: "+3 app rating", value: "-18% digital complaints", urgency: 84, complexity: 32 }
];

export const segmentChannels = [
  { name: "Retail", nps: 39, csi: 81, risk: 42 },
  { name: "SME", nps: 35, csi: 76, risk: 58 },
  { name: "Premium", nps: 61, csi: 90, risk: 22 },
  { name: "Youth", nps: 47, csi: 84, risk: 35 },
  { name: "Elderly", nps: 28, csi: 73, risk: 67 },
  { name: "Digital-only", nps: 44, csi: 82, risk: 49 },
  { name: "Branch-heavy", nps: 33, csi: 78, risk: 55 }
];

export const insights = [
  "Mobile onboarding complaints +42% MoM; KYC latency explains 61% of spike.",
  "Premium retention improving: priority chat lifted resolution success to 92%.",
  "Support SLA breaches are now #1 churn driver across retail and SME.",
  "Card delivery journey stabilized after ETA sync: complaints -31% MoM.",
  "Mortgage effort score remains worst-in-bank at 4.8/5."
];

export const scenarios = [
  { scenario: "Support wait <5m", nps: 53, retention: 93.4, churn: 5.1 },
  { scenario: "KYC fallback", nps: 49, retention: 92.7, churn: 5.8 },
  { scenario: "App performance fix", nps: 46, retention: 92.1, churn: 6.2 },
  { scenario: "Complaint prevention engine", nps: 56, retention: 94.0, churn: 4.7 }
];
