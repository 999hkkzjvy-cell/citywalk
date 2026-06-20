import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Citywalk · 城市漫步闯关打卡",
  description: "用脚步丈量城市，用打卡记录时光",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-paper">
        {children}
      </body>
    </html>
  );
}
