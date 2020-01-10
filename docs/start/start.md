# 使用

### 安装
```
npm install vue-fantui -S
```

### 引入
全局引用
```js
import Vue from 'vue'
import fantui from 'vue-fantui'

Vue.use(fantui)
```
按需引用
```js
// or
import {
  Icon,
  Button
  // ...
} from 'vue-fantui'

Vue.component(Icon.name, Icon)
Vue.component(Button.name, Button)
```
### 样式

```js
import "vue-fantui/style/index.scss";
```

