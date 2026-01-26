'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/marmo',
    color: 'hover:text-white',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/in/marmo',
    color: 'hover:text-[#0A66C2]',
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:contact@marmo.dev',
    color: 'hover:text-primary',
  },
];

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t('title')} subtitle={t('subtitle')} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-muted mb-10 max-w-2xl mx-auto">
            {t('description')}
          </p>

          {/* Email CTA */}
          <motion.a
            href="mailto:contact@marmo.dev"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary-dark text-background font-medium rounded-full transition-all duration-300 glow-hover mb-12"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send className="w-5 h-5" />
            contact@marmo.dev
          </motion.a>

          {/* Social Links */}
          <div>
            <h3 className="text-sm uppercase tracking-wider text-muted mb-6">{t('social')}</h3>
            <div className="flex justify-center gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-4 bg-card rounded-xl border border-border transition-all duration-300 hover:border-primary/50 text-muted ${link.color}`}
                  aria-label={link.name}
                >
                  <link.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
