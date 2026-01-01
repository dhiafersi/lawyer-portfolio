# GitHub Pages Deployment Guide

Follow these steps to deploy your website to GitHub Pages.

## 📋 Files to Upload

Upload these files from the `lawyer` folder:
- ✅ `index.html`
- ✅ `styles.css`
- ✅ `script.js`
- ✅ `README.md`
- ✅ `.gitignore`

## 🚀 Step-by-Step Instructions

### Option 1: Using GitHub Website (No Git Installation Needed)

1. **Create a GitHub Account**
   - Go to [github.com](https://github.com)
   - Click "Sign up" if you don't have an account
   - Verify your email

2. **Create a New Repository**
   - Click the **"+"** icon in the top-right corner
   - Select **"New repository"**
   - Repository name: `lawyer-portfolio` (or any name you prefer)
   - Description: "Portfolio website for الأستاذة هدى الطريفي"
   - Select **"Public"**
   - ✅ Check **"Add a README file"** (we'll replace it)
   - Click **"Create repository"**

3. **Upload Your Files**
   - Click **"Add file"** → **"Upload files"**
   - Drag and drop all 5 files into the upload area:
     - index.html
     - styles.css
     - script.js
     - README.md (will replace the default one)
     - .gitignore
   - Commit message: "Initial commit - Portfolio website"
   - Click **"Commit changes"**

4. **Enable GitHub Pages**
   - Go to repository **Settings** (gear icon)
   - Scroll down to **"Pages"** in the left sidebar
   - Under "Source":
     - Branch: Select **"main"** (or "master")
     - Folder: Select **"/ (root)"**
   - Click **"Save"**
   - Wait 1-2 minutes for deployment

5. **Get Your Live URL**
   - A blue box will appear saying: "Your site is published at https://yourusername.github.io/lawyer-portfolio/"
   - Click the URL to view your live website! 🎉

---

### Option 2: Using Git Command Line (Advanced)

If you have Git installed:

```bash
# Navigate to your lawyer folder
cd C:\Users\dhiaf\OneDrive\Desktop\lawyer

# Initialize Git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - Portfolio website"

# Add your GitHub repository (replace with your actual URL)
git remote add origin https://github.com/yourusername/lawyer-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then follow step 4 above to enable GitHub Pages.

---

## 🌐 Custom Domain (Optional)

Want to use a custom domain like `www.houdatrefi.com`?

1. Buy a domain from Namecheap, GoDaddy, or any provider
2. In GitHub repository Settings → Pages → Custom domain
3. Enter your domain name
4. Update your domain's DNS settings (provider will guide you)

---

## 🔧 Updating Your Website

**After making changes:**
1. Go to your repository on GitHub
2. Click on the file you want to edit
3. Click the pencil icon ✏️ to edit
4. Make your changes
5. Click "Commit changes"
6. Wait ~1 minute for GitHub Pages to update

---

## 📱 Share Your Website

Once deployed, share your live URL:
- WhatsApp
- LinkedIn  
- Business cards
- Email signature

**Your URL format:** `https://yourusername.github.io/lawyer-portfolio/`

---

## ✅ Verification Checklist

After deployment, verify:
- [ ] Website loads correctly
- [ ] All sections display properly
- [ ] Arabic text renders in RTL
- [ ] Navigation works smoothly
- [ ] Forms are functional
- [ ] Mobile responsive on phone
- [ ] All animations work

---

## 🆘 Troubleshooting

**Problem:** Page shows only README text
**Solution:** Make sure your HTML file is named exactly `index.html` (lowercase)

**Problem:** CSS not loading
**Solution:** Check that all file names match exactly (case-sensitive)

**Problem:** 404 error
**Solution:** Wait 2-3 minutes after enabling GitHub Pages

---

Need help? Feel free to ask! 🚀
