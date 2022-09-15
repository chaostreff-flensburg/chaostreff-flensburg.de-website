module.exports = {
  title: 'Chaostreff-Flensburg e.V.',
  description: 'Hackerspace und Makerplace',
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
        path: '/events/',
      },
      {
        text: 'Mitmachen',
        link: '/mitmachen/',
        path: '/mitmachen/',
      },
    ],
  },
  plugins: [
    '@vuepress/plugin-search',
  ],
};
