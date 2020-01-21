# 按钮

### 基本使用
基础的按钮用法

<demo-block>
  <example-button  slot="source" ></example-button>
  <<< @/docs/.vuepress/components/example/button.vue
</demo-block>

### 不同尺寸
提供大中小的三种尺寸，可以在不同场景下选择合适的按钮，默认中等

<demo-block>
  <example-button2  slot="source" ></example-button2>
  <<< @/docs/.vuepress/components/example/button2.vue
</demo-block>

### 禁用状态
按钮不可用状态

<demo-block>
  <example-button3  slot="source" ></example-button3>
  <<< @/docs/.vuepress/components/example/button3.vue
</demo-block>

### 带图标的按钮
按钮可以配置图标 图标列表在字体图标页面可以找到name

<demo-block>
  <example-button4  slot="source" ></example-button4>
  <<< @/docs/.vuepress/components/example/button4.vue
</demo-block>

其他的配置项 如下

|  参数   | 说明  | 类型  | 可选值  | 默认值  |
|  ----  | ----  | ----  | ----  |  ----  |
| size  | 按钮的大小 | String | large/medium/small | medium |
| type  | 按钮的类型 | String | primary/danger/warning/success | - |
| plain  | 是否是文字边框按钮类型 | Boolean | true/false | false |
| shiny  | 按钮是否拥有闪闪发光的效果 | Boolean | true/false | false |
| disabled  | 按钮是否是禁用状态 | Boolean | true/false | false |
| icon  | icon图标名称 | String | - | - |

