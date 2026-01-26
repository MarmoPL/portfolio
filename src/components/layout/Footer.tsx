'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted text-sm"
          >
            &copy; {currentYear} Marcin Czembrowski. {t('copyright')}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-sm text-muted"
          >
            {t('builtWith')} <Heart className="w-4 h-4 text-primary fill-primary" /> Vue.js & Vuetify
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
