# Ishak — portfolio

A static portfolio for GitHub Pages. It replaces the Wix site at [iboyishak.wixsite.com/mysite](https://iboyishak.wixsite.com/mysite).

Projects, the short bio, and contact details come from that site and the CV linked on the About page. Edit copy in `src/data.ts`.

## Preview

```bash
npm install
npm run dev
```

## Publish free on GitHub Pages

GitHub Pages is free for a public repository.

1. Create a GitHub repository.
   - Name it `YOUR_USERNAME.github.io` if you want the site at `https://YOUR_USERNAME.github.io`.
   - Any other name also works. The site will be at `https://YOUR_USERNAME.github.io/REPOSITORY/`.
2. Push this folder to the `main` branch.
3. In the repository, open **Settings → Pages → Build and deployment** and choose **GitHub Actions**.

The workflow in `.github/workflows/pages.yml` builds the site and publishes it. The first run can take a minute. The Pages settings page shows the live URL.

```bash
cd portfolio
git init
git add .
git commit -m "Add portfolio site for GitHub Pages."
git branch -M main
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```
