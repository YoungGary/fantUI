# 提示

通过配置type的不同，展示不同类型的提示

<demo-block>
  <example-toast  slot="source" ></example-toast>
  <<< @/docs/.vuepress/components/example/toast.vue
</demo-block>

不显示关闭按钮 并且设置时间自动关闭

<demo-block>
  <example-toast2  slot="source" ></example-toast2>
  <<< @/docs/.vuepress/components/example/toast2.vue
</demo-block>

配置项:

|  参数   | 说明  | 类型  | 可选值  | 默认值  |
|  ----  | ----  | ----  | ----  |  ----  |
| type  | 提示的类型 | String | normal/success/danger/warning | normal |
| zIndex  | 提示的z-Index值 防止被其他元素遮挡 | Number | - | 10 |
| autoClose  | 是否自动关闭提示 | Boolean | true/false | true |
| closeTime  | 提示持续的时间（毫秒） | Number | - | 2000 |
| showButton  | 是否显示关闭按钮 | Boolean | true/false | true |