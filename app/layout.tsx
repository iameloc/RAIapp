import type { Metadata } from "next";
import { Archivo, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "700", "800", "900"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "RAITec App",
  description: "Plataforma de membros da RAITec",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${archivo.variable}`}>
      <body className="min-h-dvh font-sans">{children}</body>
    </html>
  );
}
