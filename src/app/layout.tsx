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
  title: "Marcin Czembrowski | Full-Stack Developer",
  description: "Portfolio of Marcin Czembrowski (Marmo) - Full-Stack Developer specializing in web and mobile applications.",
  keywords: ["developer", "full-stack", "Vue.js", "Vuetify", "Strapi", "Python", "Flutter", "Docker", "mobile", "web development"],
  authors: [{ name: "Marcin Czembrowski" }],
  openGraph: {
    title: "Marcin Czembrowski | Full-Stack Developer",
    description: "Portfolio of Marcin Czembrowski (Marmo) - Full-Stack Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
