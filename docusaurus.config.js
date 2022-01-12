// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'Mark Harrison',
  tagline: 'Azure AppDev Specialist',
  url: 'https://markharrison.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'markharrison', // Usually your GitHub org/user name.
  projectName: 'markharrison.github.io', // Usually your repo name.

  presets: [
    [      
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          //editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-J96E5KV7Z6',
        anonymizeIP: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Mark Harrison',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logol.svg',
          srcDark: 'img/logod.svg',
        },
        items: [
          {
            to: 'about',
            label: 'About',
            position: 'left'
          },
          {
            to: 'labs',
            label: 'Labs',
            position: 'left'
          },
          {
            to: 'links',
            label: 'Links',
            position: 'left'
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/markharrison/',
            label: 'GitHub',
            position: 'right'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            label: 'Twitter',
            href: 'https://twitter.com/azure1dev',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/markharrison',
          },
          {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/markharrison-uk/',
          }
        ],
        
        copyright: `Copyright © ${new Date().getFullYear()} Mark Harrison`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
