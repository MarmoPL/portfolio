# 📚 Image Guides Index

## Quick Navigation

### 🚀 **START HERE** → `START_HERE.md`
**For everyone!** 5-minute overview with code snippets for all 4 component files.
- Overview of what needs images
- Quick 5-minute plan
- Code snippets for each component
- Testing and deployment steps

---

## 📖 Detailed Guides

### 1. `IMAGE_SETUP_SUMMARY.md` 
**Complete walkthrough** - 10 minutes
- What's already ready
- Detailed 6-step process
- Compression tips
- Testing instructions
- Troubleshooting

### 2. `IMAGES_GUIDE.md`
**Comprehensive reference** - 15 minutes
- Directory structure explanation
- Step-by-step component updates
- Complete code examples
- Image specifications
- Optimization tips
- Example complete About section

### 3. `QUICK_START_IMAGES.txt`
**Quick reference card** - 3 minutes
- Command examples
- File paths
- Common image paths
- Next.js Image code template
- File size targets

### 4. `IMAGES_CHECKLIST.md`
**Step-by-step checklist** - 20 minutes
- Image preparation checklist
- Compression checklist
- Copy files checklist
- Component update checklist
- Testing checklist
- Build checklist
- Deployment checklist

### 5. `FILE_STRUCTURE.txt`
**File layout reference** - 5 minutes
- Full project structure
- Where images go
- Which files to update
- Image file naming
- Quick commands
- Image sizes

---

## 🎯 Pick Your Guide

| Your Situation | Read This | Time |
|---|---|---|
| You want quick overview | **START_HERE.md** | 5 min |
| You need step-by-step | **IMAGES_SETUP_SUMMARY.md** | 10 min |
| You like checklists | **IMAGES_CHECKLIST.md** | 20 min |
| You need code examples | **IMAGES_GUIDE.md** | 15 min |
| You want quick reference | **QUICK_START_IMAGES.txt** | 3 min |
| You need file structure | **FILE_STRUCTURE.txt** | 5 min |

---

## 📋 What You'll Do

### Step 1: Prepare
- Gather images (profile + project screenshots)
- Compress at [TinyPNG.com](https://tinypng.com)

### Step 2: Copy
- Copy images to `public/images/` folders

### Step 3: Update Code
Update these 4 files:
1. `src/components/sections/About.tsx` - profile photo
2. `src/components/sections/Projects.tsx` - project cards
3. `src/app/[locale]/projects/marmo-edu/MarmoEduContent.tsx` - app mockup + gallery
4. `src/app/[locale]/projects/katalog/KatalogContent.tsx` - website mockup

### Step 4: Test
```bash
npm run dev
# Visit http://localhost:3000/en and check images
```

### Step 5: Deploy
```bash
git add public/images/
git commit -m "Add images"
git push
```

---

## 🗂️ Directory Structure

```
portfolio/
├── public/images/           ← PUT YOUR IMAGES HERE
│   ├── profile/
│   │   └── avatar.jpg      ← Your profile photo
│   └── projects/
│       ├── marmo-edu/      ← 3 screenshots
│       ├── katalog/        ← 3 screenshots
│       ├── wls/            ← 1 screenshot (optional)
│       └── discord-bot/    ← 1 screenshot (optional)
├── src/components/
│   └── sections/
│       ├── About.tsx       ← EDIT THIS (profile)
│       └── Projects.tsx    ← EDIT THIS (cards)
├── src/app/
│   └── [locale]/
│       └── projects/
│           ├── marmo-edu/
│           │   └── MarmoEduContent.tsx  ← EDIT THIS
│           └── katalog/
│               └── KatalogContent.tsx   ← EDIT THIS
└── GUIDES_INDEX.md         ← You are here
```

---

## 💡 Image Tips

### File Sizes (Compressed)
- Profile: 100-200 KB
- Screenshots: 200-500 KB each
- Total ideally: < 3 MB

### Recommended Dimensions
- Profile photo: 400×400px (square)
- Screenshots: 800×600px or 1200×800px
- Mobile screenshots: 400×600px (9:16)

### Best Formats
- JPG for photos (best compression)
- PNG if you need transparency
- WebP for modern browsers

### Compression
Use [TinyPNG.com](https://tinypng.com) - it's free and excellent!

---

## 🆘 Quick Help

**Images not showing?**
```bash
rm -rf .next && npm run dev
```

**Need to copy files?**
```bash
cp ~/Downloads/photo.jpg public/images/profile/avatar.jpg
```

**Want to verify they exist?**
```bash
ls -la public/images/profile/
ls -la public/images/projects/marmo-edu/
```

**Ready to deploy?**
```bash
git add public/images/
git commit -m "Add images"
git push
```

---

## 📝 Summary

1. **Read:** START_HERE.md (5 min)
2. **Gather:** Your images
3. **Compress:** At TinyPNG.com (free)
4. **Copy:** To public/images/ folders
5. **Update:** 4 component files
6. **Test:** npm run dev
7. **Deploy:** git push

Your portfolio will look amazing with real images! 🎉

---

**Questions?** Read the relevant guide above or check Next.js docs at https://nextjs.org/docs/app/api-reference/components/image
