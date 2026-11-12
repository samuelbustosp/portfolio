import type { Metadata } from "next";
import {
  Outfit,
  Plus_Jakarta_Sans,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samuel Bustos Puntis — Ingeniero en Sistemas",
  description:
    "Portfolio profesional de Samuel Bustos Puntis. Ingeniero en Sistemas de Información especializado en Datos, Producto Digital e Inteligencia Artificial aplicada.",
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
      className={`${outfit.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF9F6] text-neutral-900 font-sans">
        {children}
      </body>
    </html>
  );
}
