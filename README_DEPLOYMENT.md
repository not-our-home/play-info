# Deploying to GitHub Pages

This project has been converted to a static React app that can be deployed for free on GitHub Pages.

## Quick Setup for GitHub Pages

1. **Push your code to GitHub**
   - Create a new repository on GitHub
   - Push all files (including the `dist/public` folder after building)

2. **Build the static files**
   ```bash
   npm run build
   ```

3. **Deploy to GitHub Pages**
   - Go to your GitHub repository settings
   - Scroll down to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and select the `/dist/public` folder
   - Click "Save"

## Alternative: Using GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '20'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm install
    
    - name: Build
      run: npm run build
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist/public
```

## Other Free Hosting Options

- **Vercel**: Connect your GitHub repo at vercel.com
- **Netlify**: Drag and drop the `dist/public` folder at netlify.com
- **Surge.sh**: `npm install -g surge && surge dist/public`

Your website will be completely static with no server costs!