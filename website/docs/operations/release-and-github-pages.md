---
title: Release And GitHub Pages
description: Publishing JarvisOS docs with GitHub Pages.
---

# Release And GitHub Pages

The docs site is designed for GitHub Pages.

Expected public URL:

```text
https://moleh1307.github.io/JarvisOS/
```

## Deployment Workflow

The repository includes:

```text
.github/workflows/deploy-docs.yml
```

On pushes to `main` that change `website/**`, GitHub Actions:

1. installs dependencies;
2. builds the Docusaurus site;
3. uploads the static build;
4. deploys to GitHub Pages.

## Required GitHub Setting

In the GitHub repository:

1. open Settings;
2. open Pages;
3. set Source to GitHub Actions.

After the next workflow run, the site should publish.

## Local Verification

From `website/`:

```bash
npm ci
npm run build
npm run serve
```

The build must pass before calling docs ready.
