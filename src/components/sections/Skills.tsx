'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

const skillCategories = [
  {
    key: 'frontend',
    skills: [
      { name: 'React', color: '#61DAFB' },
      { name: 'Next.js', color: '#ffffff' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'Tailwind CSS', color: '#06B6D4' },
      { name: 'HTML/CSS', color: '#E34F26' },
      { name: 'JavaScript', color: '#F7DF1E' },
    ],
  },
  {
    key: 'backend',
    skills: [
      { name: 'Node.js', color: '#339933' },
      { name: 'Express', color: '#ffffff' },
      { name: 'Python', color: '#3776AB' },
      { name: 'PostgreSQL', color: '#4169E1' },
      { name: 'MongoDB', color: '#47A248' },
      { name: 'REST APIs', color: '#FF6B6B' },
    ],
  },
  {
    key: 'mobile',
    skills: [
      { name: 'React Native', color: '#61DAFB' },
      { name: 'Expo', color: '#000020' },
      { name: 'Flutter', color: '#02569B' },
    ],
  },
  {
    key: 'tools',
    skills: [
      { name: 'Git', color: '#F05032' },
      { name: 'Docker', color: '#2496ED' },
      { name: 'GitHub Actions', color: '#2088FF' },
      { name: 'Figma', color: '#F24E1E' },
      { name: 'VS Code', color: '#007ACC' },
      { name: 'Linux', color: '#FCC624' },
    ],
  },
];

export default function Skills() {
  const t = useTranslations('skills');

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t('title')} subtitle={t('subtitle')} />

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {t(category.key)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-background rounded-lg border border-border hover:border-primary/50 transition-all cursor-default group"
                  >
                    <span className="text-sm font-medium group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
