module.exports = {
  title: 'FantUI',
  description: '一套基于 Vue 2.x 的桌面端组件库',
  head: [
    
  ],
  plugins: [
    
  ],
  //base: '/web_accumulate/', // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    sidebarDepth: 1, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: '文档更新时间', // 文档更新时间：每个文件git最后提交的时间
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
          '/widget/iconlist',
          '/widget/icon',
          '/widget/button',
          '/widget/toast',
          '/widget/loading',
          '/widget/input',
          '/widget/datePicker',
        ]
      }
    ]
  }
}