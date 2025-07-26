# Deploy to GitHub Pages - Step by Step

## Quick Deployment (Easiest)

1. **Create a new GitHub repository** (e.g., "not-our-home-website")

2. **Copy ALL files from your Replit project** to the GitHub repository:
   - All source files (client/, server/, shared/, etc.)
   - package.json, package-lock.json
   - The .github/workflows/deploy.yml file I just created

3. **Enable GitHub Pages**:
   - Go to Settings → Pages in your GitHub repo
   - Select "GitHub Actions" as the source
   - The workflow will automatically build and deploy your site

## Manual Deployment (If you prefer)

1. Run `npm run build` in Replit
2. Copy only these files to your GitHub repo:
   ```
   dist/public/index.html
   dist/public/assets/ (entire folder)
   ```
3. In GitHub repo Settings → Pages, select "Deploy from branch" and choose main branch, root folder

## What happens next?

- Your website will be available at: `https://yourusername.github.io/repository-name`
- Every time you push changes, it will automatically rebuild and deploy
- The build process is the same as what we do in Replit

## Files you need from Replit:

**For automatic deployment (recommended):**
- Everything in your project (all files and folders)

**For manual deployment:**
- Just the `dist/public/` folder contents after running `npm run build`

The automatic method is better because you can make changes and they'll deploy automatically!