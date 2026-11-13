'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowDown,
  ArrowRight,
  ExternalLink,
  KeyRound,
  Fingerprint,
  ShieldCheck,
  Layers,
  Smartphone,
  Users,
  Sparkles,
  Trophy,
} from 'lucide-react';

const SCREENS = '/images/projects/spotty/screens';

type ScreenKey =
  | 'home'
  | 'homeTablet'
  | 'card'
  | 'loyalty'
  | 'plan'
  | 'subs'
  | 'library'
  | 'book'
  | 'catering'
  | 'merch'
  | 'assistant'
  | 'notifications'
  | 'login'
  | 'passkey';

const screenFile: Record<ScreenKey, string> = {
  home: 'home',
  homeTablet: 'home-tablet',
  card: 'card',
  loyalty: 'partner-loyalty',
  plan: 'plan',
  subs: 'subs',
  library: 'library',
  book: 'book',
  catering: 'catering',
  merch: 'merch',
  assistant: 'assistant',
  notifications: 'notifications',
  login: 'login',
  passkey: 'register-passkey',
};

const featureScreens: Record<string, [ScreenKey, ScreenKey?]> = {
  home: ['home'],
  card: ['card', 'loyalty'],
  timetable: ['plan', 'subs'],
  library: ['library', 'book'],
  food: ['catering', 'merch'],
  assistant: ['assistant', 'notifications'],
};

const techStack = [
  'Flutter',
  'Dart',
  'Riverpod',
  'go_router',
  'Supabase',
  'PostgreSQL',
  'Deno Edge Functions',
  'Strapi 5',
  'Railway',
  'Cloudflare Workers',
  'Cloudflare Vectorize',
  'Mistral AI',
  'OpenID Connect',
  'Passkeys (WebAuthn)',
  'Firebase Cloud Messaging',
  'Sentry',
  'Umami',
  'Better Stack',
];

interface TextItem {
  title: string;
  text: string;
}

interface FeatureItem extends TextItem {
  key: string;
  bullets: string[];
}

interface EngineeringItem extends TextItem {
  tags: string[];
}

interface TimelineItem extends TextItem {
  date: string;
}

interface Layer {
  name: string;
  nodes: string[];
}

function Phone({
  screen,
  alt,
  className = '',
  priority = false,
}: {
  screen: ScreenKey;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative rounded-[2.6rem] bg-[#0b0a10] p-[0.55rem] shadow-2xl shadow-black/60 ring-1 ring-white/10 ${className}`}
    >
      <div className="relative overflow-hidden rounded-[2.1rem] bg-[#F3F4F7] aspect-[390/844]">
        <Image
          src={`${SCREENS}/${screenFile[screen]}.jpg`}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 60vw, 300px"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-bold uppercase tracking-[0.14em] text-[var(--spotty-pink-light)]">
      {children}
    </span>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
};

export default function SpottyContent() {
  const t = useTranslations('spottyPage');
  const locale = useLocale();

  const platforms = t.raw('hero.platforms') as string[];
  const stats = t.raw('stats.items') as { value: string; label: string }[];
  const problemPoints = t.raw('problem.points') as TextItem[];
  const features = t.raw('features.items') as FeatureItem[];
  const unityPoints = t.raw('unityId.points') as TextItem[];
  const schoolyItems = t.raw('platform.schooly.items') as string[];
  const spottyItems = t.raw('platform.spotty.items') as string[];
  const layers = t.raw('architecture.layers') as Layer[];
  const engineering = t.raw('engineering.items') as EngineeringItem[];
  const timeline = t.raw('timeline.items') as TimelineItem[];

  const unityIcons = [Fingerprint, KeyRound, ShieldCheck];
  const problemIcons = [Layers, Users, Sparkles];

  return (
    <div className="spotty pt-20 text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="spotty-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Link
            href={`/${locale}`}
            className="mb-10 inline-flex items-center gap-2 text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {t('backToProjects')}
          </Link>

          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Eyebrow>{t('hero.eyebrow')}</Eyebrow>
              <div className="mt-5 flex items-center gap-4">
                <Image
                  src="/images/projects/spotty/spotty-mark.png"
                  alt=""
                  width={56}
                  height={94}
                  className="h-16 w-auto md:h-20"
                  priority
                />
                <h1 className="text-6xl font-extrabold md:text-8xl">{t('hero.title')}</h1>
              </div>
              <p className="spotty-gradient-text mt-5 text-2xl font-semibold md:text-3xl font-display">
                {t('hero.subtitle')}
              </p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">
                {t('hero.description')}
              </p>
              <p className="mt-5 text-sm font-semibold text-primary">{t('hero.role')}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {platforms.map((p) => (
                  <span
                    key={p}
                    className="rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-foreground/85"
                  >
                    {p}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://spotty.marmo.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-[var(--spotty-violet)] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#5a2fd0]"
                >
                  {t('hero.website')}
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href="https://projekt-unity.pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-5 py-3 font-semibold transition-colors hover:border-primary/60"
                >
                  {t('hero.unity')}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="relative mx-auto flex w-full max-w-md justify-center"
            >
              <Phone
                screen="home"
                alt={t('screens.home')}
                priority
                className="w-[62%] -rotate-3 sm:w-[56%]"
              />
              <Phone
                screen="card"
                alt={t('screens.card')}
                priority
                className="-ml-[18%] mt-14 w-[52%] rotate-3 sm:w-[46%]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card/40 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only">{t('stats.title')}</h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div key={s.label} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <div className="font-display text-4xl font-extrabold text-primary md:text-5xl">{s.value}</div>
                <div className="mt-1 text-sm text-muted">{s.label}</div>
              </motion.div>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted">{t('stats.note')}</p>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="max-w-3xl">
            <Eyebrow>{t('problem.eyebrow')}</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">{t('problem.title')}</h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">{t('problem.description')}</p>
          </motion.div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {problemPoints.map((p, i) => {
              const Icon = problemIcons[i % problemIcons.length];
              return (
                <motion.div
                  key={p.title}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-3xl border border-border bg-card p-6"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature tour */}
      <section className="bg-card/30 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-16 text-center">
            <Eyebrow>{t('features.eyebrow')}</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">{t('features.title')}</h2>
          </motion.div>

          <div className="space-y-24">
            {features.map((f, i) => {
              const [a, b] = featureScreens[f.key] ?? ['home'];
              const reversed = i % 2 === 1;
              return (
                <div
                  key={f.key}
                  className={`grid items-center gap-12 md:grid-cols-2 ${reversed ? 'md:[&>*:first-child]:order-2' : ''}`}
                >
                  <motion.div {...fadeUp}>
                    <span className="font-display text-sm font-bold text-[var(--spotty-pink-light)]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-2 text-2xl font-bold md:text-4xl">{f.title}</h3>
                    <p className="mt-4 text-lg leading-relaxed text-foreground/80">{f.text}</p>
                    <ul className="mt-6 space-y-2">
                      {f.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-3 text-sm text-foreground/85">
                          <span className="h-1.5 w-1.5 flex-none rounded-full bg-[var(--spotty-pink)]" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                  <motion.div
                    {...fadeUp}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex justify-center"
                  >
                    {b ? (
                      <div className="flex w-full max-w-md items-start justify-center gap-4">
                        <Phone screen={a} alt={t(`screens.${a}`)} className="w-1/2" />
                        <Phone screen={b} alt={t(`screens.${b}`)} className="mt-12 w-1/2" />
                      </div>
                    ) : (
                      <Phone screen={a} alt={t(`screens.${a}`)} className="w-[62%] max-w-[280px]" />
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Unity ID */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-[var(--spotty-plum)] p-6 md:p-12">
            <div className="spotty-glow pointer-events-none absolute inset-0 opacity-80" aria-hidden="true" />
            <div className="relative grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
              <motion.div {...fadeUp}>
                <Eyebrow>{t('unityId.eyebrow')}</Eyebrow>
                <h2 className="mt-3 text-3xl font-bold md:text-5xl">{t('unityId.title')}</h2>
                <p className="mt-6 text-lg leading-relaxed text-foreground/80">{t('unityId.description')}</p>
                <div className="mt-8 space-y-5">
                  {unityPoints.map((p, i) => {
                    const Icon = unityIcons[i % unityIcons.length];
                    return (
                      <div key={p.title} className="flex gap-4">
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-white/10">
                          <Icon className="h-5 w-5 text-primary-light" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold">{p.title}</h3>
                          <p className="mt-1 text-sm leading-relaxed text-foreground/75">{p.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mx-auto flex w-full max-w-md items-start justify-center gap-4"
              >
                <Phone screen="login" alt={t('screens.login')} className="w-1/2" />
                <Phone screen="passkey" alt={t('screens.passkey')} className="mt-12 w-1/2" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform: Schooly vs Spotty */}
      <section className="bg-card/30 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="max-w-3xl">
            <Eyebrow>{t('platform.eyebrow')}</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">{t('platform.title')}</h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">{t('platform.description')}</p>
          </motion.div>

          <div className="mt-12 grid items-stretch gap-5 md:grid-cols-[1fr_auto_1fr]">
            {[
              { key: 'schooly', items: schoolyItems, Icon: Layers, accent: 'text-primary bg-primary/15' },
              { key: 'spotty', items: spottyItems, Icon: Smartphone, accent: 'text-[var(--spotty-pink-light)] bg-[var(--spotty-pink)]/15' },
            ].map((col, i) => (
              <motion.div
                key={col.key}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-3xl border border-border bg-card p-6 md:p-8 ${i === 1 ? 'md:col-start-3' : ''}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${col.accent}`}>
                    <col.Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{t(`platform.${col.key}.title`)}</h3>
                    <span className="text-xs font-bold uppercase tracking-[0.12em] text-muted">
                      {t(`platform.${col.key}.subtitle`)}
                    </span>
                  </div>
                </div>
                <ul className="mt-6 space-y-3">
                  {col.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
            <div
              className="hidden items-center justify-center md:col-start-2 md:row-start-1 md:flex"
              aria-hidden="true"
            >
              <ArrowRight className="h-8 w-8 text-primary" />
            </div>
          </div>

          <motion.div
            {...fadeUp}
            className="mx-auto mt-14 max-w-4xl rounded-[1.6rem] bg-[#0b0a10] p-2 shadow-2xl shadow-black/60 ring-1 ring-white/10"
          >
            <div className="relative aspect-[1194/834] overflow-hidden rounded-[1.2rem] bg-[#F3F4F7]">
              <Image
                src={`${SCREENS}/home-tablet.jpg`}
                alt={t('screens.homeTablet')}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <Eyebrow>{t('architecture.eyebrow')}</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">{t('architecture.title')}</h2>
          </motion.div>
          <div className="flex flex-col items-stretch">
            {layers.map((layer, i) => (
              <motion.div key={layer.name} {...fadeUp} transition={{ duration: 0.45, delay: i * 0.08 }}>
                <div className="grid gap-3 rounded-3xl border border-border bg-card p-4 md:grid-cols-[150px_1fr] md:items-center md:p-5">
                  <span className="text-xs font-bold uppercase tracking-[0.12em] text-muted">{layer.name}</span>
                  <div className="flex flex-wrap gap-2">
                    {layer.nodes.map((node) => (
                      <span
                        key={node}
                        className="rounded-xl border border-primary/25 bg-primary/10 px-3 py-2 text-sm font-semibold text-foreground"
                      >
                        {node}
                      </span>
                    ))}
                  </div>
                </div>
                {i < layers.length - 1 && (
                  <div className="flex justify-center py-2" aria-hidden="true">
                    <ArrowDown className="h-5 w-5 text-primary/70" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted">{t('architecture.ops')}</p>
        </div>
      </section>

      {/* Engineering */}
      <section className="bg-card/30 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-12 max-w-3xl">
            <Eyebrow>{t('engineering.eyebrow')}</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">{t('engineering.title')}</h2>
          </motion.div>
          <div className="grid gap-5 md:grid-cols-2">
            {engineering.map((e, i) => (
              <motion.article
                key={e.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
                className="flex flex-col rounded-3xl border border-border bg-card p-6 md:p-8"
              >
                <h3 className="text-xl font-bold md:text-2xl">{e.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/80">{e.text}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {e.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-background px-2.5 py-1 text-xs text-muted ring-1 ring-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <Eyebrow>{t('timeline.eyebrow')}</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">{t('timeline.title')}</h2>
          </motion.div>
          <ol className="relative grid gap-6 md:grid-cols-5 md:gap-4">
            <span
              className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-border md:left-0 md:right-0 md:top-[7px] md:bottom-auto md:h-0.5 md:w-auto"
              aria-hidden="true"
            />
            {timeline.map((item, i) => (
              <motion.li
                key={item.date}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative pl-8 md:pl-0 md:pt-8"
              >
                <span
                  className={`absolute left-0 top-1 h-4 w-4 rounded-full border-4 border-background md:top-0 ${
                    i === timeline.length - 1 ? 'bg-[var(--spotty-pink)]' : 'bg-primary'
                  }`}
                  aria-hidden="true"
                />
                <div className="font-display text-sm font-bold text-primary">{item.date}</div>
                <h3 className="mt-1 text-lg font-bold">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{item.text}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Lineage */}
      <section className="pb-6">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href={`/${locale}/projects/marmo-edu`}
            className="group flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary/50 sm:flex-row sm:items-center"
          >
            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-primary/15">
              <Trophy className="h-5 w-5 text-primary" />
            </div>
            <p className="flex-1 text-sm leading-relaxed text-foreground/85">{t('lineage.text')}</p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              {t('lineage.link')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">{t('tech.title')}</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-primary/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 pt-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#5a2fd0] to-[#cf2f74] p-8 text-center text-white md:p-12"
          >
            <h2 className="text-3xl font-bold md:text-4xl">{t('cta.title')}</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/85">{t('cta.text')}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="https://spotty.marmo.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-[#2e1475] transition-transform hover:-translate-y-0.5"
              >
                {t('cta.website')}
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="https://projekt-unity.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/40 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                {t('cta.unity')}
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
