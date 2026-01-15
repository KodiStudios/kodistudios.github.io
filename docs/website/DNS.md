---
sidebar_position: 1
---

# DNS Quick Setup

## DNS Introduction Tldr

DNS is a table that provides mapping from `Domain Name` to `IP Address`.

DNS table contains multiple `Types`, like `Type A` and `Type CNAME`. More on these in next section.

`Domain Name` entries are split by `Prefixes`.

Plain Prefix: `@`  
Plain Prefix is Domain without Prefix, eg:
`mywebsite.com`

ALL Other Prefix: `*`  
Covers all other prefixes, including `www` in `www.mywebsite.com`

## Type A Requirements

`Type A` maps `Domain Name` to a specific `IP Address`

Retrieve `IP Address` for GitHub Pages from:
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

Need to have `Type A` Entries:

* Plain Prefix `@`  
  Covers: `mywebsite.com`
* ALL Other Prefix: `*`  
  Covers other prefixes, including: `www.mywebsite.com`

## Type CNAME Requirements

`Type CNAME` maps `Domain Name` to `Type A` entry

* Www Prefix: `www`  
  Covers: `www.mywebsite.com`

Note: It seems CNAME only supports prefix `www`.
Note: It also seems that CNAME is a superset of Type A, so it's not clear what CNAME purpose is. Redundant?

## Reference

GitHub Pages IP Address:  
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
