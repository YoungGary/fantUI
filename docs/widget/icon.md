# 字体图标使用

### 基本使用

直接引入icon组件输入name即可展示,name: 图标的造型, 可在字体图标列表页面去查询(点击即可复制)

<demo-block>
  <example-icon  slot="source" ></example-icon>
  <<< @/docs/.vuepress/components/example/icon.vue
</demo-block>

### 设置大小 颜色

 color: icon的颜色 ;size: 控制icon的大小

<demo-block>
  <example-icon2  slot="source" ></example-icon2>
  <<< @/docs/.vuepress/components/example/icon2.vue
</demo-block>

|  参数   | 说明  | 类型  | 可选值  | 默认值  |
|  ----  | ----  | ----  | ----  |  ----  |
| name  | icon的name | String | - | - |
| color  | icon的颜色 | String | - | - |
| size  | icon的大小 | String/Number | - | 1em |





