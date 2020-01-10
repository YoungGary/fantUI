# 遮罩层

### 全局使用

使用全局函数 打开 关闭遮罩层

<demo-block>
  <example-loading  slot="source" ></example-loading>
  <<< @/docs/.vuepress/components/example/loading.vue
</demo-block>

### 区域遮罩层
在一个div中可以申明组件，控制v-if的true 或者false 来展示或者隐藏

<demo-block>
  <example-loading2  slot="source" ></example-loading2>
  <<< @/docs/.vuepress/components/example/loading2.vue
</demo-block>


其他的配置项 如下

|  参数   | 说明  | 类型  | 可选值  | 默认值  |
|  ----  | ----  | ----  | ----  |  ----  |
| position  | 定位方式 | String | fixed/absolute | fixed |
| top  | 遮罩层的上方距离 | Number | - | 0 |
| left  | 遮罩层的左方距离 | Number | - | 0 |
| boxZIndex  | 层级的高低 | Number | - | 10 |
| opacity  | 遮罩背景的透明度 | Number | - | 0.7 |
| containerColor  | 遮罩背景的颜色 | String | - | black |