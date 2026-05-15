import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin", "cyrillic"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Голос клиента и CX — Командный центр",
  description: "Мониторинг клиентского опыта банка для топ-менеджмента: NPS, CSI, удержание, жалобы, клиентские пути, первопричины и следующие действия.",
  openGraph: {
    title: "Голос клиента и CX",
    description: "Панель CX-аналитики для топ-менеджмента банка.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
