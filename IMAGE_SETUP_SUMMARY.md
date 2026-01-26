# Image Setup Summary

## ✅ What's Ready

All image directories have been created for you:

```
public/images/
├── profile/                    # Ready for your profile photo
│   └── (empty - add avatar.jpg here)
└── projects/
    ├── marmo-edu/             # Ready for Marmo EDU screenshots
    │   └── (empty - add screenshot-1.jpg, 2.jpg, 3.jpg)
    ├── katalog/               # Ready for Katalog screenshots
    │   └── (empty - add screenshot-1.jpg, 2.jpg, 3.jpg)
    ├── wls/                   # Ready for WLS screenshot
    │   └── (empty - add screenshot-1.jpg)
    └── discord-bot/           # Ready for Discord bot screenshot
        └── (empty - add screenshot-1.jpg)
```

## 📝 What You Need to Do

### 1. Prepare Your Images

Collect these images and compress them:

- **Profile Photo** (1 image)
  - Your professional headshot
  - Square format: 400×400px or larger
  - Size: Compress to 100-200 KB
  - Formats: JPG, PNG, or WebP

- **Marmo EDU Screenshots** (3-5 images)
  - Mobile app screenshots showing key features
  - Size: 800×600px recommended
  - Size: Each under 500 KB
  - Formats: JPG, PNG, or WebP

- **LO IX Katalog Screenshots** (3-5 images)
  - Website/app screenshots
  - Size: 800×600px or 1200×800px recommended
  - Size: Each under 500 KB
  - Formats: JPG, PNG, or WebP

- **Wroclawska Liga Siatkowa** (1 optional image)
  - Website screenshot
  - Size: 800×600px recommended
  - Size: Under 500 KB
  - Formats: JPG, PNG, or WebP

- **Discord Bot** (1 optional image)
  - Bot interface screenshot
  - Size: 400×300px recommended
  - Size: Under 300 KB
  - Formats: JPG, PNG, or WebP

### 2. Compress Images

**Free Online:**
- [TinyPNG.com](https://tinypng.com) - Excellent compression
- [ImageOptim](https://imageoptim.com) - macOS app

**From Command Line (macOS):**
```bash
# Install ImageOptim
brew install imageoptim

# Or use sips (macOS built-in)
sips -Z 800 ~/Downloads/my-image.jpg
```

### 3. Copy Images to Project

**Option A: Finder**
1. Open Finder
2. Navigate to `public/images/profile/`
3. Drag and drop your profile photo (rename to `avatar.jpg`)
4. Repeat for each project folder

**Option B: Command Line**
```bash
# Copy profile photo
cp ~/Downloads/my-profile-photo.jpg ~/Projects/portfolio/public/images/profile/avatar.jpg

# Copy Marmo EDU screenshots
cp ~/Downloads/marmo-edu-1.jpg ~/Projects/portfolio/public/images/projects/marmo-edu/screenshot-1.jpg
cp ~/Downloads/marmo-edu-2.jpg ~/Projects/portfolio/public/images/projects/marmo-edu/screenshot-2.jpg
cp ~/Downloads/marmo-edu-3.jpg ~/Projects/portfolio/public/images/projects/marmo-edu/screenshot-3.jpg

# Copy Katalog screenshots
cp ~/Downloads/katalog-1.jpg ~/Projects/portfolio/public/images/projects/katalog/screenshot-1.jpg
cp ~/Downloads/katalog-2.jpg ~/Projects/portfolio/public/images/projects/katalog/screenshot-2.jpg
cp ~/Downloads/katalog-3.jpg ~/Projects/portfolio/public/images/projects/katalog/screenshot-3.jpg
```

### 4. Update Component Files

You'll need to update 5 component files to use your images. Here's what to do:

**A. Profile Photo** (`src/components/sections/About.tsx`)
- Add: `import Image from 'next/image';`
- Find the section with placeholder "MC" avatar
- Replace it with Image component pointing to `/images/profile/avatar.jpg`

**B. Project Cards** (`src/components/sections/Projects.tsx`)
- Add: `import Image from 'next/image';`
- Find the section with "Project Screenshot" placeholders
- Add object with project image paths
- Replace placeholder divs with Image components

**C. Marmo EDU Page** (`src/app/[locale]/projects/marmo-edu/MarmoEduContent.tsx`)
- Add: `import Image from 'next/image';`
- Replace app mockup placeholder (phone icon section)
- Replace gallery section with 3 screenshots

**D. Katalog Page** (`src/app/[locale]/projects/katalog/KatalogContent.tsx`)
- Add: `import Image from 'next/image';`
- Replace website mockup placeholder

See `IMAGES_GUIDE.md` for detailed code examples for each file.

### 5. Test Locally

```bash
# Clear Next.js cache
rm -rf .next

# Start dev server
npm run dev

# Visit and check these URLs:
# - http://localhost:3000/en (check profile photo + project cards)
# - http://localhost:3000/en/projects/marmo-edu (check app mockup + gallery)
# - http://localhost:3000/en/projects/katalog (check website mockup)
```

**Verification Checklist:**
- [ ] Profile photo displays in About section
- [ ] All project cards show images
- [ ] Marmo EDU page shows app mockup
- [ ] Marmo EDU gallery shows 3 screenshots
- [ ] Katalog page shows website mockup
- [ ] No broken image icons or console errors

### 6. Commit and Deploy

```bash
# Add all image files
git add public/images/

# Commit changes
git commit -m "Add project images and screenshots"

# Push to GitHub
git push

# GitHub Actions automatically builds and deploys
# Check: https://github.com/YOUR_USERNAME/portfolio/actions
```

Deployed website will automatically show all images! 🎉

## 📚 Documentation Files

Three guides are included in your project:

1. **QUICK_START_IMAGES.txt** - Quick reference card
2. **IMAGES_GUIDE.md** - Detailed instructions with code examples
3. **IMAGES_CHECKLIST.md** - Complete checklist to follow

## 🎯 Image Format Guide

### Profile Photo
- Dimensions: Square (400×400px minimum)
- Format: JPG, PNG, or WebP
- Target size: 100-200 KB
- Best for: Professional headshot, clear face visible

### Project Screenshots
- Dimensions: 800×600px or 1200×800px
- Format: JPG, PNG, or WebP
- Target size: 200-500 KB each
- Best for: Full-page screenshots showing main features

### Mobile App Screenshots
- Dimensions: 400×600px (9:16 aspect ratio)
- Format: JPG, PNG, or WebP
- Target size: 200-400 KB
- Best for: App interfaces on phone mockup

## 💡 Next.js Image Component

The portfolio uses Next.js Image component for optimization:

```tsx
import Image from 'next/image';

<Image
  src="/images/profile/avatar.jpg"
  alt="Marcin Czembrowski"
  width={400}
  height={400}
  className="w-full h-full object-cover"
  priority  // Use for above-the-fold images
/>
```

**Benefits:**
- Automatic format optimization (WebP on supported browsers)
- Lazy loading by default
- Responsive image sizing
- Prevents layout shift
- Image optimization at build time

## ⚠️ Common Issues & Solutions

### Images not showing after copying?
**Solution:** Clear Next.js cache and rebuild
```bash
rm -rf .next
npm run dev
```

### Image import errors?
**Solution:** Verify Image is imported
```tsx
import Image from 'next/image';  // ✓ Correct
import Image from 'next/image';  // ✓ Correct
// NOT: import { Image } from 'next/image';  // ✗ Wrong
```

### Images too large file size?
**Solution:** Compress before uploading
- Use [TinyPNG.com](https://tinypng.com)
- Target: 100-200 KB for profiles, 200-500 KB for screenshots

### Build fails after adding images?
**Solution:** Check Image component syntax
```tsx
// ✓ Correct: src must start with /
<Image src="/images/profile/avatar.jpg" ... />

// ✓ Correct: Must have width/height or fill
<Image src="/images/profile/avatar.jpg" width={400} height={400} ... />

// ✗ Wrong: Path doesn't start with /
<Image src="images/profile/avatar.jpg" ... />

// ✗ Wrong: No width/height
<Image src="/images/profile/avatar.jpg" ... />
```

## 📞 Need Help?

Check these files in order:
1. `QUICK_START_IMAGES.txt` - For quick reference
2. `IMAGES_GUIDE.md` - For detailed instructions
3. `IMAGES_CHECKLIST.md` - For step-by-step checklist

Or check the Next.js Image docs: https://nextjs.org/docs/app/api-reference/components/image

---

**You're all set! Start by copying your images to the `public/images/` folders, then update the component files.** 🚀
