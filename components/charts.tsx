"use client";

import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, ComposedChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Scatter, ScatterChart, ZAxis } from "recharts";
import { cxHistory, journeys, recommendations, scenarios } from "@/content/cx-data";

const teal = "#2dd4bf";
const blue = "#60a5fa";
const amber = "#f59e0b";
const red = "#fb7185";

export function TinySpark({ data, color = teal }: { data: number[]; color?: string }) {
  const rows = data.map((v, i) => ({ i, v }));
  return <ResponsiveContainer width="100%" height={34}><LineChart data={rows}><Line type="monotone" dataKey="v" dot={false} stroke={color} strokeWidth={2}/></LineChart></ResponsiveContainer>;
}

export function CXTimeSeries() {
  return <ResponsiveContainer width="100%" height={320}><ComposedChart data={cxHistory} margin={{ left: -16, right: 12, top: 10 }}><defs><linearGradient id="nps" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor={teal} stopOpacity={.35}/><stop offset="95%" stopColor={teal} stopOpacity={0}/></linearGradient></defs><CartesianGrid stroke="rgba(255,255,255,.07)" vertical={false}/><XAxis dataKey="period" tick={{ fill: "#94a3b8", fontSize: 12 }} axisLine={false} tickLine={false}/><YAxis tick={{ fill: "#94a3b8", fontSize: 12 }} axisLine={false} tickLine={false}/><Tooltip contentStyle={{ background: "#09111d", border: "1px solid rgba(255,255,255,.12)", borderRadius: 14 }}/><Area type="monotone" dataKey="nps" name="NPS" fill="url(#nps)" stroke={teal} strokeWidth={3}/><Line type="monotone" dataKey="csi" name="CSI" stroke={blue} strokeWidth={2} dot={false}/><Bar dataKey="complaints" name="Жалобы" fill="rgba(251,113,133,.34)" radius={[6,6,0,0]}/></ComposedChart></ResponsiveContainer>;
}

export function JourneyRadar() {
  const data = journeys.map(j => ({ journey: j.name, satisfaction: j.sat, pain: j.pain, resolution: j.resolution }));
  return <ResponsiveContainer width="100%" height={330}><RadarChart data={data}><PolarGrid stroke="rgba(15,23,42,.13)"/><PolarAngleAxis dataKey="journey" tick={{ fill: "#334155", fontSize: 11 }}/><PolarRadiusAxis tick={false} axisLine={false}/><Radar dataKey="satisfaction" stroke="#2563eb" fill="#2563eb" fillOpacity={0.18}/><Radar dataKey="pain" stroke="#e11d48" fill="#e11d48" fillOpacity={0.12}/></RadarChart></ResponsiveContainer>;
}

export function JourneyBars() {
  return <ResponsiveContainer width="100%" height={320}><BarChart data={journeys} layout="vertical" margin={{ left: 18, right: 10 }}><CartesianGrid stroke="rgba(15,23,42,.08)" horizontal={false}/><XAxis type="number" hide/><YAxis type="category" dataKey="name" width={86} tick={{ fill: "#475569", fontSize: 12 }} axisLine={false} tickLine={false}/><Tooltip contentStyle={{ borderRadius: 14 }}/><Bar dataKey="sat" name="Удовлетворённость" radius={8}>{journeys.map(j => <Cell key={j.name} fill={j.trend < 0 ? red : teal}/>)}</Bar></BarChart></ResponsiveContainer>;
}

export function PriorityMatrix() {
  const data = recommendations.map(r => ({ name: r.action.slice(0, 26), urgency: r.urgency, complexity: r.complexity, z: parseInt(r.impact.replace(/\D/g, "")) || 4 }));
  return <ResponsiveContainer width="100%" height={310}><ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 0 }}><CartesianGrid stroke="rgba(15,23,42,.1)"/><XAxis dataKey="complexity" name="Сложность" tick={{ fill: "#64748b", fontSize: 12 }}/><YAxis dataKey="urgency" name="Срочность" tick={{ fill: "#64748b", fontSize: 12 }}/><ZAxis dataKey="z" range={[120, 520]}/><Tooltip cursor={{ strokeDasharray: "3 3" }} contentStyle={{ borderRadius: 14 }}/><Scatter data={data} fill="#0f766e"/></ScatterChart></ResponsiveContainer>;
}

export function ScenarioChart() {
  return <ResponsiveContainer width="100%" height={280}><AreaChart data={scenarios} margin={{ left: -10, right: 12 }}><defs><linearGradient id="scenario" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#2563eb" stopOpacity={.28}/><stop offset="95%" stopColor="#2563eb" stopOpacity={0}/></linearGradient></defs><CartesianGrid stroke="rgba(15,23,42,.08)" vertical={false}/><XAxis dataKey="scenario" tick={{ fill: "#475569", fontSize: 11 }} axisLine={false} tickLine={false}/><YAxis tick={{ fill: "#64748b", fontSize: 12 }} axisLine={false} tickLine={false}/><Tooltip contentStyle={{ borderRadius: 14 }}/><Area dataKey="nps" name="NPS" stroke="#2563eb" fill="url(#scenario)" strokeWidth={3}/><Line dataKey="retention" name="Удержание" stroke={teal} strokeWidth={2}/></AreaChart></ResponsiveContainer>;
}

export function SentimentTrend() {
  return <ResponsiveContainer width="100%" height={260}><AreaChart data={cxHistory}><CartesianGrid stroke="rgba(255,255,255,.07)" vertical={false}/><XAxis dataKey="period" tick={{ fill: "#94a3b8", fontSize: 11 }} axisLine={false} tickLine={false}/><YAxis hide/><Tooltip contentStyle={{ background: "#09111d", border: "1px solid rgba(255,255,255,.12)", borderRadius: 14 }}/><Area type="monotone" dataKey="app" name="Рейтинг приложения" stroke={blue} fill="rgba(96,165,250,.16)" strokeWidth={3}/><Area type="monotone" dataKey="churnRisk" name="Риск оттока" stroke={amber} fill="rgba(245,158,11,.12)" strokeWidth={2}/></AreaChart></ResponsiveContainer>;
}
