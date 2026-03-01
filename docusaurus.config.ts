import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  // Center
  title: "Kodi Studios",
  tagline: "Delightful and Useful Apps",

  // Favicon shows up in Browser Tabs, not on actual page
  favicon: "img/KodiStudiosLogo.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://kodistudios.com",

  trailingSlash: false,

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  onBrokenLinks: "throw",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "KodiStudios", // Usually your GitHub org/user name.
  projectName: "kodistudios.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        // Top Left, 1st Item
        docs: {
          sidebarPath: "./sidebars.ts",

          // Specifies "Edit this page" link at the bottom of each wiki page.
          // "edit" is GitHub special address to specify Edit node of a given address.
          // Opposite to "edit" is "tree", which opens Reading Mode.
          // "main" is the branch where we want edits to be made.
          // TODO: Maybe switch it to 'develop' branch later?
          editUrl:
            "https://github.com/KodiStudios/kodistudios.github.io/tree/main",
        },

        // Top Left, 2nd Item
        blog: {
          showReadingTime: false,

          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Adds "Edit This Page" links
          editUrl:
            "https://github.com/KodiStudios/kodistudios.github.io/tree/main",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },

        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/KodiStudiosLogo.png",
    navbar: {
      title: "Kodi Studios",
      logo: {
        alt: "Kodi Studios Logo",
        src: "img/KodiStudiosLogo.svg",
      },
      items: [
        // Top-Left Links Section
        //
        // Wiki
        // Content is organized by Tree Structure
        {
          label: "Kodi",
          type: "doc",
          docId: "intro",
          position: "left",
        },

        // Blog
        // Content is organized by Date
        {
          label: "Blog",
          to: "/blog",
          position: "left",
        },

        // Top-Right
        {
          href: "https://github.com/KodiStudios/kodistudios.github.io",
          label: "GitHub",
          position: "right",
        },
      ],
    },

    // Bottom
    footer: {
      style: "dark",
      links: [
        // Bottom Left
        {
          title: "Docs",
          items: [
            {
              label: "Kodi",
              to: "/docs/intro",
            },
            {
              label: "Blog",
              to: "/blog",
            },
          ],
        },

        // Bottom Center
        {
          title: "Community",
          items: [
            {
              label: "Instagram",
              href: "https://www.instagram.com/nikoaristov",
            },
            {
              label: "YouTube",
              href: "https://www.youtube.com/@kodistudios",
            },
          ],
        },

        // Bottom Right
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/KodiStudios/kodistudios.github.io",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Kodi Studios LLC. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
