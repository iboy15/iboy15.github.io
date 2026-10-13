# Ishak — portfolio

Live site: https://iboy15.github.io/

Source is on `main`. The published files are the built site on `gh-pages`. GitHub Actions could not build it because the account is locked for a billing issue, so the built files are published directly.

Edit copy in `src/data.ts`, then preview:

```bash
npm install
npm run dev
```

Publish an update:

```bash
npm run build
rm -rf /tmp/ishak-pages
mkdir -p /tmp/ishak-pages
cp -R dist/. /tmp/ishak-pages/
touch /tmp/ishak-pages/.nojekyll
cd /tmp/ishak-pages
git init -b gh-pages
git add -A
git commit -m "Publish the built portfolio site."
git remote add origin https://github.com/iboy15/iboy15.github.io.git
git push --force origin gh-pages
```
