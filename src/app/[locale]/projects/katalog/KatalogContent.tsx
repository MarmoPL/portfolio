'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowLeft, Monitor, Gamepad2, Bot, Database, Users, Rocket, Code2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from '@/components/ui/SectionTitle';

const techStack = [
  'Vue.js',
  'Vuetify',
  'Strapi CMS',
  'Python',
  'OpenAI',
];

const features = [
  { icon: Monitor, key: 'tour' },
  { icon: Gamepad2, key: 'hunt' },
  { icon: Bot, key: 'ai' },
  { icon: Database, key: 'cms' },
];

export default function KatalogContent() {
  const t = useTranslations('katalogPage');
  const locale = useLocale();
  const homeLink = `/${locale}`;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient opacity-30" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href={homeLink}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors mb-8 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('backToProjects')}
            </motion.div>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="w-8 h-8 text-primary" />
              <span className="px-3 py-1 bg-yellow-500/10 text-yellow-500 text-sm font-medium rounded-full">
                In Progress
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('hero.title')}</h1>
            <p className="text-xl md:text-2xl text-primary font-medium mb-6">
              {t('hero.subtitle')}
            </p>
            <p className="text-lg text-muted">{t('hero.description')}</p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">{t('overview.title')}</h2>
              <p className="text-muted text-lg leading-relaxed">
                {t('overview.description')}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Website screenshot */}
              <div className="aspect-video rounded-2xl border border-border overflow-hidden">
                <Image
                  src="/images/projects/katalog-lo9/klo9-screen.png"
                  alt="Katalog LO IX Screenshot"
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t('stats.title')} subtitle="" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl border border-primary/30 p-8 md:p-12 text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <Users className="w-12 h-12 text-primary" />
            </div>
            <div className="text-5xl md:text-7xl font-bold text-primary mb-2">
              {t('stats.visitors')}
            </div>
            <div className="text-xl font-medium mb-4">{t('stats.visitorsLabel')}</div>
            <p className="text-muted max-w-md mx-auto">{t('stats.visitorsDesc')}</p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t('features.title')} subtitle="" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-card p-6 rounded-2xl border border-border hover:border-primary/30 transition-all"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{t(`features.${feature.key}`)}</h3>
                  <p className="text-muted text-sm">{t(`features.${feature.key}Desc`)}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl border border-border p-8 md:p-12 text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Rocket className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('upcoming.title')}</h2>
            <p className="text-muted max-w-2xl mx-auto">{t('upcoming.description')}</p>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 bg-card/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t('tech.title')} subtitle="" />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover:border-primary/50 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
