/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/docusaurus.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'emuto', // Title for your website.
  tagline: 'a lightweight JSON processor',
  url: 'https://kantord.github.io/emuto/', // Your website URL
  baseUrl: '/emuto/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://your-docusaurus-test-site.com',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  organizationName: 'kantord',
  projectName: 'emuto',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'getting-started', label: 'Getting started'},
    {doc: 'basic-filters', label: 'Docs'},
    { href: 'https://github.com/kantord/emuto', label: 'GitHub' }
  ],

  algolia: {
    apiKey: '5c2bde5b82aef26ca0949001be26db90',
    indexName: 'emuto',
    algoliaOptions: {}, // Optional, if provided by Algolia
  },

  // If you have users set above, you add it here:
  users,

  /* Colors for website */
  colors: {
    primaryColor: '#45636c',
    secondaryColor: '#c43636',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Dániel Kántor`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/kantord/emuto',
};

module.exports = siteConfig;
