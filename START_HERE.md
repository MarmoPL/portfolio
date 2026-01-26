# 📸 How to Add Images - START HERE

This is the easiest way to add images to your portfolio. Read this first!

## ⚡ Super Quick Version (5 minutes)

1. **Gather images:**
   - Profile photo (JPG/PNG, square, 400×400px)
   - 3 Marmo EDU screenshots
   - 3 Katalog screenshots

2. **Compress images:**
   - Go to [TinyPNG.com](https://tinypng.com)
   - Upload and compress all images
   - Download compressed versions

3. **Copy to project:**
   ```bash
   # Copy profile photo
   cp ~/Downloads/my-photo.jpg ~/Projects/portfolio/public/images/profile/avatar.jpg
   
   # Copy Marmo EDU screenshots
   cp ~/Downloads/marmo-1.jpg ~/Projects/portfolio/public/images/projects/marmo-edu/screenshot-1.jpg
   cp ~/Downloads/marmo-2.jpg ~/Projects/portfolio/public/images/projects/marmo-edu/screenshot-2.jpg
   cp ~/Downloads/marmo-3.jpg ~/Projects/portfolio/public/images/projects/marmo-edu/screenshot-3.jpg
   
   # Copy Katalog screenshots
   cp ~/Downloads/katalog-1.jpg ~/Projects/portfolio/public/images/projects/katalog/screenshot-1.jpg
   cp ~/Downloads/katalog-2.jpg ~/Projects/portfolio/public/images/projects/katalog/screenshot-2.jpg
   cp ~/Downloads/katalog-3.jpg ~/Projects/portfolio/public/images/projects/katalog/screenshot-3.jpg
   ```

4. **Update 4 component files** (see detailed guide below)

5. **Deploy:**
   ```bash
   git add public/images/
   git commit -m "Add images"
   git push
   ```

## 📚 Documentation Available

Choose based on your needs:

| Document | Use When | Time |
|----------|----------|------|
| **START_HERE.md** | You want overview | 2 min |
| **IMAGE_SETUP_SUMMARY.md** | You need clear steps | 5 min |
| **QUICK_START_IMAGES.txt** | You want quick reference | 3 min |
| **IMAGES_GUIDE.md** | You need code examples | 15 min |
| **IMAGES_CHECKLIST.md** | You want step-by-step | 20 min |
| **FILE_STRUCTURE.txt** | You need file layout | 5 min |

## 🎯 Overview

Your portfolio has 5 places that need images:

1. **About Section** (Home page)
   - Your profile photo
   - File: `src/components/sections/About.tsx`
   - Image: `public/images/profile/avatar.jpg`

2. **Project Cards** (Home page)
   - 4 project thumbnails
   - File: `src/components/sections/Projects.tsx`
   - Images: `public/images/projects/*/screenshot-1.jpg`

3. **Marmo EDU Project Page**
   - App mockup + 3 screenshots
   - File: `src/app/[locale]/projects/marmo-edu/MarmoEduContent.tsx`
   - Images: `public/images/projects/marmo-edu/screenshot-*.jpg`

4. **Katalog Project Page**
   - Website mockup
   - File: `src/app/[locale]/projects/katalog/KatalogContent.tsx`
   - Images: `public/images/projects/katalog/screenshot-1.jpg`

## 🗂️ Folder Structure Already Created

All folders are ready:

```
public/images/
├── profile/
│   └── (put avatar.jpg here)
└── projects/
    ├── marmo-edu/       (put 3 screenshots here)
    ├── katalog/         (put 3 screenshots here)
    ├── wls/             (optional: 1 screenshot)
    └── discord-bot/     (optional: 1 screenshot)
```

## 📋 Component Files to Update

### 1. About Section - Profile Photo
**File:** `src/components/sections/About.tsx`

Find this code:
```tsx
<div className="aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-border overflow-hidden">
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-center">
      <div className="w-32 h-32 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4">
        <span className="text-5xl font-bold gradient-text">MC</span>
      </div>
```

Replace with:
```tsx
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

### 2. Project Cards - Thumbnails
**File:** `src/components/sections/Projects.tsx`

Add at top:
```tsx
import Image from 'next/image';
```

Find this code:
```tsx
<div className={`relative ${isFeatured ? 'h-64' : 'h-48'} bg-gradient-to-br from-primary/10 to-primary/5`}>
  <div className="absolute inset-0 flex items-center justify-center">
    <span className="text-muted text-sm">Project Screenshot</span>
  </div>
</div>
```

Replace with:
```tsx
const projectImages: Record<string, string> = {
  'marmo-edu': '/images/projects/marmo-edu/screenshot-1.jpg',
  'katalog': '/images/projects/katalog/screenshot-1.jpg',
  'wls': '/images/projects/wls/screenshot-1.jpg',
  'discord-bot': '/images/projects/discord-bot/screenshot-1.jpg',
};

// Then use in JSX:
<div className={`relative ${isFeatured ? 'h-64' : 'h-48'} overflow-hidden`}>
  <Image
    src={projectImages[project.id] || '/images/placeholder.jpg'}
    alt={t(`${project.translationKey}.title`)}
    fill
    className="object-cover"
  />
</div>
```

### 3. Marmo EDU Page - App Mockup & Gallery
**File:** `src/app/[locale]/projects/marmo-edu/MarmoEduContent.tsx`

Add at top:
```tsx
import Image from 'next/image';
```

Find app mockup:
```tsx
<div className="aspect-[9/16] max-w-xs mx-auto bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl border border-border overflow-hidden">
  <div className="absolute inset-0 flex items-center justify-center">
    <Smartphone className="w-16 h-16 text-primary/50 mx-auto mb-4" />
    <p className="text-muted text-sm">App Screenshot</p>
  </div>
</div>
```

Replace with:
```tsx
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

Find gallery:
```tsx
<div className="grid md:grid-cols-3 gap-6">
  {[1, 2, 3].map((item) => (
    <motion.div
      ...
      className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-border flex items-center justify-center"
    >
      <span className="text-muted text-sm">Screenshot {item}</span>
    </motion.div>
  ))}
</div>
```

Replace with:
```tsx
const screenshots = [
  '/images/projects/marmo-edu/screenshot-1.jpg',
  '/images/projects/marmo-edu/screenshot-2.jpg',
  '/images/projects/marmo-edu/screenshot-3.jpg',
];

<div className="grid md:grid-cols-3 gap-6 bg-card/30">
  {screenshots.map((src, index) => (
    <motion.div
      key={index}
      ...
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

### 4. Katalog Page - Website Mockup
**File:** `src/app/[locale]/projects/katalog/KatalogContent.tsx`

Add at top:
```tsx
import Image from 'next/image';
```

Find website mockup:
```tsx
<div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl border border-border overflow-hidden">
  <div className="absolute inset-0 flex items-center justify-center">
    <View className="w-16 h-16 text-primary/50 mx-auto mb-4" />
    <p className="text-muted text-sm">Website Screenshot</p>
  </div>
</div>
```

Replace with:
```tsx
<div className="aspect-video rounded-2xl border border-border overflow-hidden">
  <Image
    src="/images/projects/katalog/screenshot-1.jpg"
    alt="LO IX Katalog Website"
    width={800}
    height={600}
    className="w-full h-full object-cover"
  />
</div>
```

## ✅ Testing

After updating components:

```bash
# Clear cache
rm -rf .next

# Start dev server
npm run dev

# Visit these URLs:
# - http://localhost:3000/en (see profile + cards)
# - http://localhost:3000/en/projects/marmo-edu
# - http://localhost:3000/en/projects/katalog
```

Check that all images load correctly!

## 🚀 Deploying

```bash
# Stage images
git add public/images/

# Commit changes
git commit -m "Add project images and screenshots"

# Push to GitHub
git push

# GitHub Actions automatically builds and deploys
# Your portfolio updates automatically!
```

## 🆘 Troubleshooting

**Images not showing?**
- Clear cache: `rm -rf .next`
- Check file exists: `ls public/images/profile/`
- Verify Image import: `import Image from 'next/image';`

**File path errors?**
- Always use `/` at start: `/images/profile/avatar.jpg` ✓
- Never: `images/profile/avatar.jpg` ✗

**Build fails?**
- Image needs `width` and `height` OR `fill` prop
- Double check Image syntax

## 📖 More Information

See detailed guides:
- `IMAGE_SETUP_SUMMARY.md` - Complete walkthrough
- `IMAGES_GUIDE.md` - With all code examples
- `IMAGES_CHECKLIST.md` - Step-by-step checklist
- `FILE_STRUCTURE.txt` - File organization reference

---

**Ready?** Start by gathering your images and compressing them at [TinyPNG.com](https://tinypng.com)! 🎉
