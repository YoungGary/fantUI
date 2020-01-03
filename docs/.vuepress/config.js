module.exports = {
  title: 'FantUI',
  description: '一套基于 Vue 2.0 的桌面端组件库',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }],
  ],
  plugins: [
    ['demo-code', {
      jsLibs: [
        // umd
        'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js',
        'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js'
    ],
      styleStr: 'text-decoration: underline;',
      showText: '展示代码',
      hideText: '隐藏代码',
      minHeight: 0,
      onlineBtns: {
        codepen: false,
        jsfiddle: false,
        codesandbox: false,
      },
      
    }]
  ],
  //base: '/web_accumulate/', // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    nav: [
      { text: '主页', link: '/' }, // 内部链接 以docs为根目录
      { text: '指南', link: '/start/about' }, // 内部链接 以docs为根目录
      { text: '个人博客', link: 'http://obkoro1.com/' }, // 外部链接
      { text: 'Github', link: 'https://github.com/YoungGary/fantUI' }, // 外部链接   
    ],
    sidebar: [
      {
        title: '起步',
        collapsable: false,
        children: [
          '/start/about',
          '/start/version',
          '/start/start',
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/widget/icon',
        ]
      }
    ]
  }
}