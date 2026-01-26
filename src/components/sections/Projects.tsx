'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Award, Archive, Clock, CheckCircle } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Link from 'next/link';

interface Project {
  id: string;
  translationKey: string;
  status: 'completed' | 'inProgress' | 'archived' | 'awardWinner';
  tech: string[];
  link?: string;
  hasDetailPage?: boolean;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 'marmo-edu',
    translationKey: 'marmoEdu',
    status: 'awardWinner',
    tech: ['Flutter', 'Python', 'FastAPI', 'MariaDB', 'Docker'],
    hasDetailPage: true,
    featured: true,
  },
  {
    id: 'katalog',
    translationKey: 'katalog',
    status: 'inProgress',
    tech: ['Next.js', 'Strapi', 'FastAPI', 'Three.js'],
    hasDetailPage: true,
    featured: true,
  },
  {
    id: 'wls',
    translationKey: 'wls',
    status: 'archived',
    tech: ['Vue', 'Vuetify', 'Directus', 'Auth0'],
  },
  {
    id: 'discord-bot',
    translationKey: 'discordBot',
    status: 'completed',
    tech: ['Python', 'Discord.py', 'APIs'],
  },
];

const statusConfig = {
  completed: { icon: CheckCircle, color: 'text-green-500', bg: 'bg-green-500/10' },
  inProgress: { icon: Clock, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
  archived: { icon: Archive, color: 'text-gray-500', bg: 'bg-gray-500/10' },
  awardWinner: { icon: Award, color: 'text-primary', bg: 'bg-primary/10' },
};

export default function Projects() {
  const t = useTranslations('projects');
  const locale = useLocale();

  const getProjectLink = (project: Project) => {
    if (project.hasDetailPage) {
      // Always include locale in the path
      return `/${locale}/projects/${project.id}`;
    }
    return project.link;
  };

  return (
    <section id="projects" className="py-20 bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t('title')} subtitle={t('subtitle')} />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const StatusIcon = statusConfig[project.status].icon;
            const isFeatured = project.featured;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative bg-card rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 ${
                  isFeatured ? 'md:col-span-2' : ''
                }`}
              >
                {/* Project Image Placeholder */}
                <div className={`relative ${isFeatured ? 'h-64' : 'h-48'} bg-gradient-to-br from-primary/10 to-primary/5`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-muted text-sm">Project Screenshot</span>
                  </div>
                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full ${statusConfig[project.status].bg}`}>
                    <StatusIcon className={`w-4 h-4 ${statusConfig[project.status].color}`} />
                    <span className={`text-xs font-medium ${statusConfig[project.status].color}`}>
                      {t(`status.${project.status}`)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {t(`${project.translationKey}.title`)}
                  </h3>
                  <p className="text-muted mb-4 line-clamp-2">
                    {t(`${project.translationKey}.shortDesc`)}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-background rounded border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  {project.hasDetailPage ? (
                    <Link href={getProjectLink(project) || '#'}>
                      <motion.div
                        className="inline-flex items-center gap-2 text-primary font-medium cursor-pointer"
                        whileHover={{ x: 5 }}
                      >
                        {t('viewDetails')}
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </Link>
                  ) : project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                    >
                      {t('viewProject')}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : null}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
