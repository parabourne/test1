import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Daha modern və oxunaqlı Inter fontu
const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bottle Game | Dostluq Çarxı",
  description: "Bəy və Xanım üçün hazırlanmış interaktiv dostluq oyunu.",
  icons: {
    icon: "/favicon.ico", // Əgər ikon qoymaq istəsən
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az">
      <body
        className={`${inter.className} antialiased bg-zinc-50 text-zinc-900`}
      >
        {children}
      </body>
    </html>
  );
}