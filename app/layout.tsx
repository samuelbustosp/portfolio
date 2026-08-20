import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samuel Bustos Puntis | Ingeniero en Sistemas & Data Scientist",
  description:
    "Portfolio profesional de Samuel Bustos Puntis. Ingeniero en Sistemas de Información especializado en Data Analytics, Data Science, Machine Learning, arquitecturas Cloud en AWS y desarrollo web moderno.",
  keywords: [
    "Samuel Bustos Puntis",
    "Data Scientist",
    "Data Analyst",
    "Data Engineer",
    "Ingeniero en Sistemas",
    "Python",
    "SQL",
    "Machine Learning",
    "AWS",
    "Terraform",
    "Power BI",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Samuel Bustos Puntis" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#05070d] text-slate-100 font-sans">
        {children}
      </body>
    </html>
  );
}
