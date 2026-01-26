'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowLeft, Smartphone, Server, Zap, Shield, Code2, Link2 } from 'lucide-react';
import Link from 'next/link';
import Timeline from '@/components/projects/Timeline';
import AwardShowcase from '@/components/projects/AwardShowcase';
import SectionTitle from '@/components/ui/SectionTitle';
import Image from 'next/image';

const techStack = [
  'Flutter',
  'Dart',
  'Python',
  'FastAPI',
  'MariaDB',
  'Meilisearch',
  'Docker',
  'Google Sign-In',
  'Push Notifications',
  'REST API',
];

const integrations = [
  'Librus',
  'Edupage',
  'JakDojade',
  'WolneLektury',
];

const features = [
  { icon: Smartphone, key: 'mobile' },
  { icon: Server, key: 'backend' },
  { icon: Zap, key: 'realtime' },
  { icon: Shield, key: 'secure' },
  { icon: Link2, key: 'integrations' },
];

export default function MarmoEduContent() {
  const t = useTranslations('marmoEduPage');
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
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                Flutter + Python
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
              {/* App mockup placeholder */}
              <div className="max-w-xs mx-auto rounded-3xl border border-border overflow-hidden">
                <Image
                  src="/images/projects/marmo-edu/Picture2.png"
                  alt="Marmo EDU App"
                  width={550}
                  height={350}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t('features.title')} subtitle="" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Integrations Section */}
      <section className="py-16 bg-card/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Data Integrations" subtitle="" />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {integrations.map((integration, index) => (
              <motion.div
                key={integration}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-4 bg-card border border-border rounded-2xl text-center hover:border-primary/50 transition-colors"
              >
                <Link2 className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="text-sm font-medium">{integration}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t('timeline.title')} subtitle={t('timeline.subtitle')} />
          <Timeline />
        </div>
      </section>

      {/* Award Section */}
      <section className="py-16 bg-card/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AwardShowcase />
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16">
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

      {/* Gallery Section */}
      <section className="py-16 bg-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t('gallery.title')} subtitle="" />
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item * 0.1 }}
                className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-border flex items-center justify-center"
              >
                <span className="text-muted text-sm">Screenshot {item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
