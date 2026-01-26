'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // Remove current locale from pathname if present
    const pathWithoutLocale = pathname.replace(/^\/(en|pl)/, '') || '/';
    const newPath = newLocale === 'en' ? pathWithoutLocale : `/${newLocale}${pathWithoutLocale}`;
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-1 bg-card rounded-full p-1">
      <motion.button
        onClick={() => switchLocale('en')}
        className={`px-3 py-1 text-sm rounded-full transition-colors ${
          locale === 'en'
            ? 'bg-primary text-background font-medium'
            : 'text-muted hover:text-foreground'
        }`}
        whileTap={{ scale: 0.95 }}
      >
        EN
      </motion.button>
      <motion.button
        onClick={() => switchLocale('pl')}
        className={`px-3 py-1 text-sm rounded-full transition-colors ${
          locale === 'pl'
            ? 'bg-primary text-background font-medium'
            : 'text-muted hover:text-foreground'
        }`}
        whileTap={{ scale: 0.95 }}
      >
        PL
      </motion.button>
    </div>
  );
}
