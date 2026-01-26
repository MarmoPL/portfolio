'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, GraduationCap } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import AnimatedSection from '../ui/AnimatedSection';

export default function About() {
  const t = useTranslations('about');

  const infoItems = [
    { icon: MapPin, label: 'Wroclaw, Poland' },
    { icon: Briefcase, label: 'Full-Stack Developer' },
    { icon: GraduationCap, label: 'Continuous Learner' },
  ];

  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t('title')} subtitle={t('subtitle')} />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image Placeholder */}
          <AnimatedSection>
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-border overflow-hidden relative flex items-center justify-center">
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl shadow-primary/10">
                  <Image
                    src="/images/personal/profile.png"
                    alt="Marcin Czembrowski"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
                animate={{ scale: [1.2, 1, 1.2] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </AnimatedSection>

          {/* About Content */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-6">
              <p className="text-lg text-foreground/90 leading-relaxed">
                {t('description')}
              </p>
              <p className="text-muted leading-relaxed">
                {t('paragraph2')}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                {infoItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border"
                  >
                    <item.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
