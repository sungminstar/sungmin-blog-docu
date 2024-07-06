// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SungminStar",
  tagline: "SungminStar",
  url: "https://www.sungminstar.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "https://github.com/sungminstar.png",
  organizationName: "sungmin",
  projectName: "SungminStarBlog",
  i18n: {
    defaultLocale: "ko",
    locales: ["ko"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: "/",
          blogSidebarTitle: "Posts",
          blogSidebarCount: "ALL",
          blogTitle: "sungmins star blog",
          postsPerPage: 5,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Sungmin Star",
        logo: {
          alt: "Sungmin Star Logo",
          src: "img/star-logo.svg",
        },
        items: [
          // {
          //   to: "/algorithm",
          //   position: "left",
          //   label: "Algorithm",
          // },
          // {
          //   to: "/til",
          //   position: "left",
          //   label: "TIL",
          // },
          // {
          //   to: "/project",
          //   position: "left",
          //   label: "Project",
          // },
          {
            href: "http://easy-utensil-418.notion.site",
            label: "Info",
            position: "right",
          },
          {
            href: "https://github.com/sungminstar",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Sungmin Lim`,
      },
      // prism: {
      //   theme: prismThemes.github,
      //   darkTheme: prismThemes.dracula,
      // },
    }),
};

export default config;
