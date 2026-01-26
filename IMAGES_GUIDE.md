# Image Management Guide

## Directory Structure

```
public/
├── images/
│   ├── profile/           # Your profile images
│   │   └── avatar.jpg     # Main profile photo
│   └── projects/
│       ├── marmo-edu/     # Marmo EDU screenshots
│       │   ├── screenshot-1.jpg
│       │   ├── screenshot-2.jpg
│       │   └── mockup.png
│       ├── katalog/       # LO IX Katalog screenshots
│       │   ├── screenshot-1.jpg
│       │   ├── screenshot-2.jpg
│       │   └── tour-preview.jpg
│       ├── wls/           # WLS screenshots
│       │   └── screenshot-1.jpg
│       └── discord-bot/   # Discord bot screenshot
│           └── screenshot-1.jpg
```

## Step 1: Add Images to the Directories

Place your image files in the appropriate folders:

- **Profile photo:** `public/images/profile/avatar.jpg`
- **Marmo EDU screenshots:** `public/images/projects/marmo-edu/`
- **LO IX Katalog screenshots:** `public/images/projects/katalog/`
- **WLS screenshots:** `public/images/projects/wls/`
- **Discord Bot screenshots:** `public/images/projects/discord-bot/`

## Step 2: Update Components to Display Images

### For Profile Image (About Section)

In `src/components/sections/About.tsx`, replace the placeholder:

```tsx
// Find this section:
<div className="aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-border overflow-hidden">
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-center">
      <div className="w-32 h-32 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4">
        <span className="text-5xl font-bold gradient-text">MC</span>
      </div>
      <p className="text-muted text-sm">Profile Image</p>
    </div>
  </div>
</div>

// Replace with:
import Image from 'next/image';

<div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border border-border">
  <Image
    src="/images/profile/avatar.jpg"
    alt="Marcin Czembrowski"
    width={400}
    height={400}
    className="w-full h-full object-cover"
    priority
  />
</div>
```

### For Project Screenshots in Marmo EDU Page

In `src/app/[locale]/projects/marmo-edu/MarmoEduContent.tsx`, replace the app mockup:

```tsx
// Find this section:
<div className="aspect-[9/16] max-w-xs mx-auto bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl border border-border overflow-hidden">
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-center">
      <Smartphone className="w-16 h-16 text-primary/50 mx-auto mb-4" />
      <p className="text-muted text-sm">App Screenshot</p>
    </div>
  </div>
</div>

// Replace with:
import Image from 'next/image';

<div className="aspect-[9/16] max-w-xs mx-auto rounded-3xl border border-border overflow-hidden">
  <Image
    src="/images/projects/marmo-edu/screenshot-1.jpg"
    alt="Marmo EDU App"
    width={400}
    height={600}
    className="w-full h-full object-cover"
  />
</div>
```

### For Project Gallery Screenshots

In `src/app/[locale]/projects/marmo-edu/MarmoEduContent.tsx`, update gallery:

```tsx
// Current code:
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

// Replace with:
import Image from 'next/image';

const screenshots = [
  '/images/projects/marmo-edu/screenshot-1.jpg',
  '/images/projects/marmo-edu/screenshot-2.jpg',
  '/images/projects/marmo-edu/screenshot-3.jpg',
];

<div className="grid md:grid-cols-3 gap-6">
  {screenshots.map((src, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="aspect-video rounded-2xl border border-border overflow-hidden"
    >
      <Image
        src={src}
        alt={`Screenshot ${index + 1}`}
        width={600}
        height={400}
        className="w-full h-full object-cover"
      />
    </motion.div>
  ))}
</div>
```

### For Project Cards on Main Page

In `src/components/sections/Projects.tsx`, update the project image placeholders:

```tsx
// Current code:
<div className={`relative ${isFeatured ? 'h-64' : 'h-48'} bg-gradient-to-br from-primary/10 to-primary/5`}>
  <div className="absolute inset-0 flex items-center justify-center">
    <span className="text-muted text-sm">Project Screenshot</span>
  </div>
</div>

// Replace with:
import Image from 'next/image';

const projectImages = {
  'marmo-edu': '/images/projects/marmo-edu/screenshot-1.jpg',
  'katalog': '/images/projects/katalog/screenshot-1.jpg',
  'wls': '/images/projects/wls/screenshot-1.jpg',
  'discord-bot': '/images/projects/discord-bot/screenshot-1.jpg',
};

<div className={`relative ${isFeatured ? 'h-64' : 'h-48'} overflow-hidden`}>
  <Image
    src={projectImages[project.id] || '/images/placeholder.jpg'}
    alt={t(`${project.translationKey}.title`)}
    fill
    className="object-cover"
  />
</div>
```

## Image Specifications

### Profile Photo
- **Format:** JPG, PNG, or WebP
- **Size:** 400x400px minimum (square)
- **File size:** < 500KB

### Project Screenshots
- **Format:** JPG, PNG, or WebP
- **Size:** For mobile mockups: 400x600px; For web: 1200x800px
- **File size:** < 1MB per image

### Hero/Background Images
- **Format:** JPG or WebP
- **Size:** 1920x1080px or higher
- **File size:** < 2MB

## Optimization Tips

1. **Compress images** before uploading:
   - Use [TinyPNG](https://tinypng.com/) or [ImageOptim](https://imageoptim.com/)
   - Aim for 50-200KB per image

2. **Use modern formats:**
   - WebP format provides better compression than PNG/JPG
   - Next.js automatically serves WebP to supported browsers

3. **Use Image Component:**
   - Always use Next.js `Image` component for automatic optimization
   - Provides lazy loading, responsive sizing, and format conversion

## Adding Images via Command Line

### 1. Copy images to the correct folders:
```bash
# Profile photo
cp ~/Downloads/my-photo.jpg public/images/profile/avatar.jpg

# Project screenshots
cp ~/Downloads/marmo-edu-1.jpg public/images/projects/marmo-edu/screenshot-1.jpg
cp ~/Downloads/marmo-edu-2.jpg public/images/projects/marmo-edu/screenshot-2.jpg
```

### 2. Verify images are in place:
```bash
ls -la public/images/projects/marmo-edu/
```

### 3. Update component files to use the images (see Step 2 above)

### 4. Test locally:
```bash
npm run dev
# Visit http://localhost:3000/en
```

## Example: Complete About Section with Image

```tsx
'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
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
          {/* Profile Image */}
          <AnimatedSection>
            <div className="relative max-w-md mx-auto">
              <div className="aspect-square rounded-2xl overflow-hidden border border-border">
                <Image
                  src="/images/profile/avatar.jpg"
                  alt="Marcin Czembrowski"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
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
```

## Next.js Image Component Reference

```tsx
import Image from 'next/image';

// Basic usage
<Image
  src="/images/profile/avatar.jpg"
  alt="Description"
  width={400}
  height={400}
/>

// With responsive sizing
<Image
  src="/images/projects/marmo-edu/screenshot-1.jpg"
  alt="Screenshot"
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  responsive
/>

// Fill parent container
<div className="relative w-full h-96">
  <Image
    src="/images/projects/katalog/screenshot-1.jpg"
    alt="Screenshot"
    fill
    className="object-cover"
  />
</div>
```

## Troubleshooting

**Images not showing?**
- Check file path starts with `/` (e.g., `/images/profile/avatar.jpg`)
- Verify file exists in `public/images/` directory
- Clear Next.js cache: `rm -rf .next` and rebuild

**Images too large?**
- Compress before uploading
- Use WebP format instead of PNG/JPG
- Reduce dimensions if not needed at full size

**Deployment issue (GitHub Pages)?**
- Make sure images are in `public/` folder (they are automatically copied)
- Use relative paths starting with `/`
- Images should work automatically after push
