---
sidebar_position: 2
---

# GitHub Pages Markdown Website

## Introduction

There are multiple ways to host a Website on GitHub.

### Use Md pages to generate Html

This one is more fun!

Creating Website on GitHub involves following:

1. Creating new Repository
   This will contain contents of your Website
1. Mark Repository as GitHub Pages
   This allows compilation of .md files into .html using GitHub Pipelines
1. Configure DNS to point to GitHub Pages IP Address

## Create Website

Create new GitHub Repository.
Use whatever repository-name you need. By default, the website name will be:
`http://repository-name.github.io`
Note: new Repository will already contain basic `ReadMe.md` file.

GitHub recommends publishing website not with `main` branch, but with `gh-pages` branch. Thus, in Repository, Create a new Branch called `gh-pages`.

Configure Repository as GitHub Pages  
Navigate to Settings > Pages  
Select Branch: `gh-pages`  
Click Save

Go to your Url provider and configure DNS to point to GitHub:  
[DNS Wiki](DNS.md)

Then, in Repository  
Settings > Pages  
Custom Domain: `yourdomain.com`  
Click Save button

GitHub will launch DNS check.

Finally, Check Enforce HTTPS checkbox.

That's it. Now you should be able to go to:  
<http://yourdomain.com>  
And see contents of `ReadMe.md`

## References

<https://docs.github.com/en/pages/getting-started-with-github-pages>
