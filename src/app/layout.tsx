import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Antony Salim | Software Engineer",
  description: "Portofolio Antony Salim, Junior Software Engineer | Fullstack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-sky-50 text-slate-800 antialiased selection:bg-sky-200 selection:text-sky-900">
        {children}
      </body>
    </html>
  );
}