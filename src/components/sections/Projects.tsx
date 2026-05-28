'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Award, Archive, Clock, CheckCircle, MessageSquare, Server, MessageCircle, X, Map, Fuel } from 'lucide-react';
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
  image?: string;
  icon?: React.ComponentType<any>;
  organization?: string;
  role?: string;
}

const projects: Project[] = [
  {
    id: 'grobownik',
    translationKey: 'grobownik',
    status: 'inProgress',
    tech: ['Flutter', 'Dart', 'Riverpod', 'Mapbox', 'Directus', 'PostgreSQL', 'Docker'],
    featured: true,
    icon: Map,
    organization: 'KN Solvro',
    role: 'Project Manager',
    // image: '/images/projects/grobownik/grobownik-main.png', // Uncomment when screenshot is added
  },
  {
    id: 'marmo-edu',
    translationKey: 'marmoEdu',
    status: 'awardWinner',
    tech: ['Flutter', 'Python', 'FastAPI', 'MariaDB', 'Docker'],
    hasDetailPage: true,
    featured: true,
    image: '/images/projects/marmo-edu/marmoedu-main.png',
  },
  {
    id: 'marmo-car',
    translationKey: 'marmoCar',
    status: 'inProgress',
    tech: ['Firebase', 'Flutter', 'Stripe', 'Python', 'Google Play Console', 'Google Cloud'],
    featured: true,
    image: '/images/projects/marmo-infocar/marmo car app.png',
  },
  {
    id: 'trainy',
    translationKey: 'trainy',
    status: 'inProgress',
    tech: ['Flutter', 'FastAPI', 'PostgreSQL', 'PostGIS', 'Redis', 'WebSockets', 'MQTT'],
    featured: true,
    image: '/images/projects/trainy/trainy-main.png',
  },
  {
    id: 'langnews',
    translationKey: 'langnews',
    status: 'inProgress',
    tech: ['Next.js', 'React', 'Supabase', 'Mistral AI', 'ElevenLabs', 'Tailwind CSS', 'Zustand'],
    image: '/images/projects/langnews/langnews-main.png',
  },
  {
    id: 'za-ile-paliwo',
    translationKey: 'zaIlePaliwo',
    status: 'completed',
    tech: ['React', 'TypeScript', 'MapLibre GL', 'FastAPI', 'Supabase', 'Mistral AI', 'Playwright'],
    icon: Fuel,
  },
  {
    id: 'katalog',
    translationKey: 'katalog',
    status: 'inProgress',
    tech: ['Vue.js', 'Vuetify', 'Strapi', 'FastAPI'],
    hasDetailPage: true,
    featured: false,
    image: '/images/projects/katalog-lo9/klo9-main.png',
  },
  {
    id: 'medicover-mcp',
    translationKey: 'medicoverMcp',
    status: 'completed',
    tech: ['Cloudflare Workers', 'TypeScript', 'Cloudflare KV', 'Authentik', 'OAuth2', 'JSON-RPC'],
    icon: Server,
  },
  {
    id: 'pit-calculator',
    translationKey: 'pitCalculator',
    status: 'completed',
    tech: ['Python', 'Streamlit', 'Pandas', 'Altair', 'SQLite', 'NBP API'],
    image: '/images/projects/pit-calculator/pit calculator.png',
  },
  {
    id: 'wls',
    translationKey: 'wls',
    status: 'archived',
    tech: ['Vue', 'Vuetify', 'Directus', 'Auth0'],
    image: '/images/projects/wls/wls-main.png',
  },
  {
    id: 'discord-bot',
    translationKey: 'discordBot',
    status: 'archived',
    tech: ['Python', 'Discord.py', 'APIs'],
    icon: MessageCircle,
  },
];

const statusConfig = {
  completed: { icon: CheckCircle, color: 'text-green-500', bg: 'bg-green-500/10' },
  inProgress: { icon: Clock, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
  archived: { icon: Archive, color: 'text-gray-500', bg: 'bg-gray-500/10' },
  awardWinner: { icon: Award, color: 'text-primary', bg: 'bg-primary/10' },
};

export default function Projects() {
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);
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

            if (project.id === 'grobownik') {
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-card rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 p-6 md:p-8 md:col-span-2 flex flex-col justify-between"
                >
                  <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Left Column: Info & Details */}
                    <div className="space-y-6">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          {project.organization && (
                            <span className="px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-primary/10 text-primary rounded-full">
                              {project.organization}
                            </span>
                          )}
                          {project.role && (
                            <span className="px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-secondary/35 text-secondary-foreground rounded-full border border-border">
                              {project.role}
                            </span>
                          )}
                          <span className="px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-yellow-500/10 text-yellow-500 rounded-full flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            {t(`status.${project.status}`)}
                          </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-extrabold group-hover:text-primary transition-colors">
                          {t(`${project.translationKey}.title`)}
                        </h3>
                      </div>

                      <div className="space-y-2">
                        <span className="text-[11px] font-bold text-primary uppercase tracking-wider block">Project Goal</span>
                        <p className="text-sm text-foreground/80 leading-relaxed">
                          A mobile application designed to help volunteers quickly locate and map graves of deceased university professors on All Saints' Day, replacing traditional paper maps and handwritten lists.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <span className="text-[11px] font-bold text-primary uppercase tracking-wider block">Tech Stack</span>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 text-xs bg-background rounded border border-border"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Features & Timeline */}
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <span className="text-[11px] font-bold text-primary uppercase tracking-wider block">Core Features (MVP)</span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                            Interactive GPS Map
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                            Professor Name Search
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                            Biography & Profiles
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                            Offline Map Cache
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                            Admin CRUD CMS
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                            Dark Mode Support
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <span className="text-[11px] font-bold text-primary uppercase tracking-wider block">Timeline & Milestones</span>
                        <div className="space-y-3 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-border/60">
                          {/* Step 1 */}
                          <div className="flex items-start gap-4 relative">
                            <div className="w-4 h-4 rounded-full border-4 border-background bg-emerald-500 flex items-center justify-center text-[7px] text-white font-bold z-10 mt-0.5">
                              ✓
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-emerald-500">May 2026 — Kickoff & Onboarding</div>
                              <p className="text-[10px] text-muted-foreground">Team formation, technology choices, setup repository.</p>
                            </div>
                          </div>
                          {/* Step 2 */}
                          <div className="flex items-start gap-4 relative">
                            <div className="w-4 h-4 rounded-full border-4 border-background bg-primary flex items-center justify-center z-10 mt-0.5">
                              <span className="w-1.5 h-1.5 bg-background rounded-full animate-ping" />
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-primary">July-Aug 2026 — MVP Development</div>
                              <p className="text-[10px] text-muted-foreground">Backend API implementation & core mobile screens mapping.</p>
                            </div>
                          </div>
                          {/* Step 3 */}
                          <div className="flex items-start gap-4 relative">
                            <div className="w-4 h-4 rounded-full border-4 border-background bg-muted flex items-center justify-center z-10 mt-0.5" />
                            <div>
                              <div className="text-xs font-semibold text-muted-foreground">Oct 2026 — Production Release</div>
                              <p className="text-[10px] text-muted-foreground">Final field-testing & launch for the All Saints' Day campaign.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/60 text-xs text-muted-foreground italic flex items-center gap-1.5">
                    <Map className="w-4 h-4 text-primary" />
                    Project Manager driving team development and deployment coordinates.
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative bg-card rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 ${isFeatured ? 'md:col-span-2' : ''
                  }`}
              >
                {/* Project Image Placeholder or Image */}
                {/* Project Image Aspect-Ratio Container */}
                <div 
                  className={`relative w-full ${isFeatured ? 'md:aspect-[21/9] aspect-video' : 'aspect-video'} bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden cursor-pointer`}
                  onClick={() => project.image && setActiveLightboxImage(project.image)}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={t(`${project.translationKey}.title`)}
                      fill
                      sizes={isFeatured ? "(max-width: 768px) 100vw, 100vw" : "(max-width: 768px) 100vw, 50vw"}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      {project.icon ? (
                        <project.icon className="w-16 h-16 text-primary/30" />
                      ) : (
                        <MessageSquare className="w-16 h-16 text-primary/30" />
                      )}
                    </div>
                  )}
                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full ${statusConfig[project.status].bg} z-30`}>
                    <StatusIcon className={`w-4 h-4 ${statusConfig[project.status].color}`} />
                    <span className={`text-xs font-medium ${statusConfig[project.status].color}`}>
                      {t(`status.${project.status}`)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {(project.organization || project.role) && (
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      {project.organization && (
                        <span className="px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-primary/10 text-primary rounded-full">
                          {project.organization}
                        </span>
                      )}
                      {project.role && (
                        <span className="px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-secondary/35 text-secondary-foreground rounded-full border border-border">
                          {project.role}
                        </span>
                      )}
                    </div>
                  )}
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

        {/* Solvro Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 md:p-8 bg-card rounded-2xl border border-border text-center"
        >
          <p className="text-lg text-muted mb-2">
            {t('solvro.text')}
          </p>
          <p className="text-xl font-semibold mb-4">
            <span className="text-primary">Solvro</span> – {t('solvro.working')}{' '}
            <a
              href="https://github.com/Solvro/mobile-topwr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              ToPWR
            </a>{' '}
            {t('solvro.project')}
          </p>
          <a
            href="https://solvro.pwr.edu.pl/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            {t('solvro.learnMore')}
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 cursor-pointer animate-in fade-in duration-200"
          onClick={() => setActiveLightboxImage(null)}
        >
          <div className="absolute top-4 right-4 text-white hover:text-primary transition-colors p-2 bg-black/40 rounded-full border border-white/10 z-50">
            <X className="w-6 h-6" />
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center pointer-events-none"
          >
            <img 
              src={activeLightboxImage} 
              alt="Project Showcase"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/10"
            />
          </motion.div>
        </div>
      )}
    </section>
  );
}
