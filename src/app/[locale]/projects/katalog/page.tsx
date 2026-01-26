import { setRequestLocale } from 'next-intl/server';
import { locales } from '@/i18n/config';
import KatalogContent from './KatalogContent';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function KatalogPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <KatalogContent />;
}
