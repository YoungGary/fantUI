# 日期选择器

通过双向绑定的值 可以传入一个Date的类型对象 或者字符串类型的值 去设置时间

<demo-block>
  <example-date slot="source" ></example-date>
  <<< @/docs/.vuepress/components/example/date.vue
</demo-block>


配置项:

|  参数   | 说明  | 类型  | 可选值  | 默认值  |
|  ----  | ----  | ----  | ----  |  ----  |
| v-model  | 双向绑定的值 | String /Date | - | - |
| placeholder  | 日期选择器的提示文字 | String | - | - |
| valueFormat  | 日期的格式 | String | - | yyyy-MM-dd |
