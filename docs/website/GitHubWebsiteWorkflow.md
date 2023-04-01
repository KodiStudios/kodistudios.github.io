---
sidebar_position: 3
---

# GitHub Pages Website End-to-End Workflow

## TLDR

Check in changes into `main` branch.

On GitHub website, in Settings > Pages, Add Custom URL.  
Note, you will have to do this action EVERY time you want to update website.

After couple of minutes, the website will get updated.

## Structure

There are 2 branches, `main` and `gh-pages`.

User should check into `main` branch.

Then, GitHub Bot will merge `main` into `gh-pages`. It is using:  
`.github/workflows/deploy.yml`
