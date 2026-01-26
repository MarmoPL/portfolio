# Image Addition Checklist

## Prepare Your Images

- [ ] **Profile Photo** (400x400px minimum)
  - File: `avatar.jpg` or `avatar.png`
  - Format: JPG, PNG, or WebP
  - Location: `public/images/profile/`
  - Size: < 500KB

- [ ] **Marmo EDU Screenshots** (as many as you want)
  - Files: `screenshot-1.jpg`, `screenshot-2.jpg`, `screenshot-3.jpg`
  - Format: JPG, PNG, or WebP
  - Location: `public/images/projects/marmo-edu/`
  - Size: < 1MB each
  - Recommended: 3-5 screenshots showing key features

- [ ] **LO IX Katalog Screenshots** (as many as you want)
  - Files: `screenshot-1.jpg`, `screenshot-2.jpg`, etc.
  - Format: JPG, PNG, or WebP
  - Location: `public/images/projects/katalog/`
  - Size: < 1MB each
  - Recommended: 3-5 screenshots

- [ ] **WLS Screenshots** (optional)
  - Files: `screenshot-1.jpg`
  - Format: JPG, PNG, or WebP
  - Location: `public/images/projects/wls/`
  - Size: < 1MB

- [ ] **Discord Bot Screenshot** (optional)
  - Files: `screenshot-1.jpg`
  - Format: JPG, PNG, or WebP
  - Location: `public/images/projects/discord-bot/`
  - Size: < 1MB

## Optimize Images

- [ ] Compress images before uploading
  - Use: [TinyPNG.com](https://tinypng.com/) or [ImageOptim](https://imageoptim.com/)
  - Target size: Profile photo 100-200KB, Screenshots 200-500KB

- [ ] Consider using WebP format
  - Better compression than JPG/PNG
  - Next.js serves WebP automatically to modern browsers

## Copy Files to Project

```bash
# Copy profile photo
cp ~/Downloads/my-profile-photo.jpg public/images/profile/avatar.jpg

# Copy Marmo EDU screenshots
cp ~/Downloads/marmo-edu-screenshot-1.jpg public/images/projects/marmo-edu/screenshot-1.jpg
cp ~/Downloads/marmo-edu-screenshot-2.jpg public/images/projects/marmo-edu/screenshot-2.jpg

# Copy Katalog screenshots
cp ~/Downloads/katalog-screenshot-1.jpg public/images/projects/katalog/screenshot-1.jpg

# Verify they exist
ls -la public/images/
```

## Update Components

### 1. Profile Image (About Section)

**File:** `src/components/sections/About.tsx`

- [ ] Import Image component: `import Image from 'next/image';`
- [ ] Replace placeholder div with Image component
- [ ] Point to `/images/profile/avatar.jpg`
- [ ] Set width/height to 400x400

### 2. Marmo EDU App Mockup

**File:** `src/app/[locale]/projects/marmo-edu/MarmoEduContent.tsx`

- [ ] Import Image component
- [ ] Replace app mockup placeholder
- [ ] Point to `/images/projects/marmo-edu/screenshot-1.jpg`
- [ ] Set width/height to 400x600

### 3. Marmo EDU Gallery

**File:** `src/app/[locale]/projects/marmo-edu/MarmoEduContent.tsx`

- [ ] Create array of screenshot paths
- [ ] Replace placeholder gallery items
- [ ] Add all 3 screenshots
- [ ] Update Image src for each

### 4. Katalog Screenshot

**File:** `src/app/[locale]/projects/katalog/KatalogContent.tsx`

- [ ] Import Image component
- [ ] Replace website mockup placeholder
- [ ] Point to `/images/projects/katalog/screenshot-1.jpg`
- [ ] Set width/height to 600x400

### 5. Project Cards

**File:** `src/components/sections/Projects.tsx`

- [ ] Import Image component
- [ ] Create projectImages object with paths
- [ ] Replace card image placeholders
- [ ] Use Image component with `fill`

## Test Locally

```bash
# Clear cache
rm -rf .next

# Start dev server
npm run dev

# Visit pages and verify images load:
# - http://localhost:3000/en (profile photo, project cards)
# - http://localhost:3000/en/projects/marmo-edu (screenshots)
# - http://localhost:3000/en/projects/katalog (screenshot)
```

- [ ] Profile photo displays correctly in About section
- [ ] Project card images load on main page
- [ ] Marmo EDU app mockup displays
- [ ] Marmo EDU gallery shows 3 screenshots
- [ ] Katalog screenshot displays
- [ ] No broken image icons (404)

## Build for Production

```bash
# Build static export
npm run build

# Check build output
ls -la out/en/
```

- [ ] Build completes without errors
- [ ] Build succeeds with all images

## Deploy

- [ ] Push changes to GitHub: `git add . && git commit -m "Add project images" && git push`
- [ ] GitHub Actions automatically builds and deploys
- [ ] Visit deployed site and verify images load

## File Structure Reference

```
public/images/
├── profile/
│   └── avatar.jpg
└── projects/
    ├── marmo-edu/
    │   ├── screenshot-1.jpg
    │   ├── screenshot-2.jpg
    │   └── screenshot-3.jpg
    ├── katalog/
    │   ├── screenshot-1.jpg
    │   ├── screenshot-2.jpg
    │   └── screenshot-3.jpg
    ├── wls/
    │   └── screenshot-1.jpg
    └── discord-bot/
        └── screenshot-1.jpg
```

## Quick Command Reference

```bash
# Create directories
mkdir -p public/images/profile
mkdir -p public/images/projects/{marmo-edu,katalog,wls,discord-bot}

# Copy all images at once (example)
cp ~/my-images/* public/images/

# List all images
find public/images -type f

# Check image sizes
du -h public/images/*

# Optimize with ImageOptim (macOS)
open -a ImageOptim public/images/

# Clear Next.js cache and rebuild
rm -rf .next && npm run build
```

---

**Need Help?**
- See `IMAGES_GUIDE.md` for detailed instructions
- Check component files for Image component syntax
- Verify images are in correct folders before testing
