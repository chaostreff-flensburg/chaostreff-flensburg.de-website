const { description } = require('../../package')

module.exports = {
  title: 'Chaostreff-Flensburg e.V.',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  markdown: {
    anchor: { permalink: false },
    extendMarkdown: md => {
      md.set({ breaks: true });
    }
  },
  dest: "./dist",
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    searchMaxSuggestions: 10,
    test: [/.+.md/],
    nav: [
      {
        text: 'Blog',
        link: '/blog/',
      },
      {
        text: 'Events',
        link: '/events/',
        children: [
          {
            text: 'Hacks On The Beach 2022',
            link: '/events/hoth2022',
          }
        ]
      },
      {
        text: 'Mitmachen',
        link: '/mitmachen/',
        children: [
          {
            text: 'Wir',
            link: '/mitmachen/wir',
          },
          {
            text: 'Unterstützen',
            link: '/mitmachen/unterstützen',
          },
          {
            text: 'Wir',
            link: '/mitmachen/wir',
          },
        ]
      },
    ],
  },
  plugins: [
    '@vuepress/plugin-search',
  ],
};
