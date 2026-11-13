import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { locales } from '@/i18n/config';
import SpottyContent from './SpottyContent';

// Spotty's own brand typefaces, self-hosted and used only on this page (see `.spotty` in globals.css).
// next/font/google can't resolve Bricolage Grotesque's current Google Fonts URLs under Turbopack.
import '@fontsource-variable/bricolage-grotesque';
import '@fontsource-variable/figtree';

export const metadata: Metadata = {
  title: 'Spotty | Marcin Czembrowski',
  description:
    'Spotty, the student app for Wrocław high schools, built on the white-label Schooly platform for Projekt Unity.',
};

interface PageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function SpottyPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <SpottyContent />;
}
