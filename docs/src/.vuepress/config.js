const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'CLEVUX',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  //description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#df4c73' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: '/clevux_logo.png',
    sidebarDepth: 2,
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guía',
        link: '/guía/',
      },
      {
        text: 'Recursos y Herramientas',
        link: '/herramientas/',
      },
    ],
    sidebar: {
      '/guía/': [
        {
          title: 'Guía',
          collapsable: false,
          children: [
            '',
            'introducción',
            'tipos',
            'generales',
            'especificos',
          ]
        }
      ],
      '/herramientas/': [
        {
          title: 'Recursos y Herramientas',
          collapsable: false,
          children: [
            '',
            'calculadora',
          ]
        }
      ],
    },
      smoothScroll: true
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/medium-zoom',
  ]
}
