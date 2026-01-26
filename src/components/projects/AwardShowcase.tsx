'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Award, Star, Trophy } from 'lucide-react';

export default function AwardShowcase() {
  const t = useTranslations('marmoEduPage.award');

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl" />
      
      {/* Floating decorations */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-10 -right-10 w-40 h-40 border border-primary/20 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-10 -left-10 w-32 h-32 border border-primary/20 rounded-full"
      />

      <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl border border-primary/30 p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Award Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', bounce: 0.5 }}
            className="relative"
          >
            <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30">
              <Trophy className="w-16 h-16 text-background" />
            </div>
            {/* Sparkles */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-2 -right-2"
            >
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-1 -left-1"
            >
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            </motion.div>
          </motion.div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                {t('title')}
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">{t('subtitle')}</h3>
            <p className="text-muted mb-6">{t('description')}</p>
            
            {/* Placeholder for actual award details */}
            <div className="inline-block px-6 py-3 bg-primary/10 border border-primary/30 rounded-xl">
              <p className="text-sm text-primary font-medium">{t('placeholder')}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
