'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Rocket, Server, Smartphone, Bug, Trophy } from 'lucide-react';

const timelinePhases = [
  { key: 'phase1', icon: Rocket },
  { key: 'phase2', icon: Server },
  { key: 'phase3', icon: Smartphone },
  { key: 'phase4', icon: Bug },
  { key: 'phase5', icon: Trophy },
];

export default function Timeline() {
  const t = useTranslations('timeline');

  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

      <div className="space-y-12">
        {timelinePhases.map((phase, index) => {
          const isEven = index % 2 === 0;
          const Icon = phase.icon;

          return (
            <motion.div
              key={phase.key}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-center ${
                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'} pl-20 md:pl-0`}>
                <div className={`${isEven ? 'md:text-right' : 'md:text-left'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="inline-block bg-card p-6 rounded-2xl border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className={`flex items-center gap-3 mb-3 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                      <span className="text-sm font-medium text-primary">{t(`${phase.key}.date`)}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{t(`${phase.key}.title`)}</h3>
                    <p className="text-muted">{t(`${phase.key}.description`)}</p>
                  </motion.div>
                </div>
              </div>

              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                className="absolute left-4 md:left-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center md:-translate-x-1/2 z-10 shadow-lg shadow-primary/30"
              >
                <Icon className="w-5 h-5 text-background" />
              </motion.div>

              {/* Empty space for alignment */}
              <div className="hidden md:block w-1/2" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
