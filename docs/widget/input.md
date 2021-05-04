# 输入框

### 基本使用

输入框的基本用法，支持双向绑定，可以自定义样式设置宽度,可以设置placeholder。

<demo-block>
  <example-input1  slot="source" ></example-input1>
  <<< @/docs/.vuepress/components/example/input1.vue
</demo-block>

### 禁用状态

disabled属性可以设置输入框的禁用状态

<demo-block>
  <example-input2  slot="source" ></example-input2>
  <<< @/docs/.vuepress/components/example/input2.vue
</demo-block>

### 不同类型

输入框支持三种类型  ```text```  ```password```  ```textarea```  其中```textarea```的用法在下面会详细讲

<demo-block>
  <example-input3  slot="source" ></example-input3>
  <<< @/docs/.vuepress/components/example/input3.vue
</demo-block>

### 尺寸

输入框支持三种尺寸 ```small```  ```normal```  ```large```  默认是```normal```类型

<demo-block>
  <example-input4  slot="source" ></example-input4>
  <<< @/docs/.vuepress/components/example/input4.vue
</demo-block>

### 可清空

```clearable``` 属性可以配置 可清空的输入框

<demo-block>
  <example-input5  slot="source" ></example-input5>
  <<< @/docs/.vuepress/components/example/input5.vue
</demo-block>

### 带按钮的输入框

可以在组件内通过 ```prefix-icon``` ```suffix-icon``` 来配置前后的图标  也可以通过```slot```的方式引入，icon的名称 在字体图标列表中寻找

<demo-block>
  <example-input6  slot="source" ></example-input6>
  <<< @/docs/.vuepress/components/example/input6.vue
</demo-block>

### 文本域

通过配置 ```type="textarea"``` 来展示文本域 ``` disabled``` 属性可以配置 禁用状态

<demo-block>
  <example-textarea1  slot="source" ></example-textarea1>
  <<< @/docs/.vuepress/components/example/textarea1.vue
</demo-block>

### 指定宽高

配置 ```cols``` ```rows``` 来设置文本域的宽高

<demo-block>
  <example-textarea3  slot="source" ></example-textarea3>
  <<< @/docs/.vuepress/components/example/textarea3.vue
</demo-block>

### 自适应的文本域

通过配置 ```autosize``` 来让文本域自适应宽高 

<demo-block>
  <example-textarea2  slot="source" ></example-textarea2>
  <<< @/docs/.vuepress/components/example/textarea2.vue
</demo-block>

### 自适应文本域并设置最大值 最小值 

在 ```autosize``` 属性中可以传入```min``` ```max```属性 来控制 最大和最小自适应多少个字符

<demo-block>
  <example-textarea4  slot="source" ></example-textarea4>
  <<< @/docs/.vuepress/components/example/textarea4.vue
</demo-block>

配置项:

|  参数   | 说明  | 类型  | 可选值  | 默认值  |
|  ----  | ----  | ----  | ----  |  ----  |
| type  | 输入框的类型 | String | text/password/textarea | text |
| size  | 输入框的大小 | String | large/small/normal | normal |
| disabled  | 输入框是否是禁用状态 | Boolean | true/false | false |
| placeholder  | 输入框的提示信息 | String | - | - |
| readonly  | 输入框是否是只读状态 | Boolean | true/false | false |
| v-model  | 输入框的值（双向绑定） | String | - | - |
| clearable | 输入框拥有清空按钮 | Boolean | true/false | false |
| prefixIcon | 输入框前部的icon名称 | String | - | - |
| suffixIcon | 输入框尾部的icon名称 | String | - | - |
| rows | textarea的初始化宽 | String | - | - |
| cols | textarea的初始化高 | String | - | - |
| autosize | textarea可以自适应宽高 | Boolean | true/false | false |
| autosize | textarea可以自适应宽高，可以设置对象形式 如 :autosize="{min:'200',max:'400'}" | Object | - | - |

slot

|  name   | 说明  |
| suffix | 输入框尾部内容，只对 type="text" 有效 | 
| prefix | 输入框头部内容，只对 type="text" 有效 |

Input Events

|  事件名称   | 说明  | 回调参数 |
| blur | 	在 Input 失去焦点时触发  | 	(value: string | number) |
| focus | 在 Input 获得焦点时触发 | 	(value: string | number) |
| change |	仅在输入框失去焦点或用户按下回车时触发 | 	(value: string | number) |
| input | 在 Input 值改变时触发 | 	(value: string | number) |



