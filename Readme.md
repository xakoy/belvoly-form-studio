# belvoly-form-studio

动态表单创建和渲染的组件， 基于 `Vue` 和 `Typescript`，UI 采用了 `element-ui`。

## 组件
两大组件 `Design` 和 `FormViewer`。

### Design 组件
> 设计器组件，此组件提供拖拽方式完成表单的设计，并返回设计器的JSON Model。

```javascript
import Design from 'belvoly-form-studio'
```
```html
<design v-model="designModel"></design>
```

效果
![design](./doc/img/design.png)

### FormViewer 组件
> 此组件将Design组件的JSON Model 转为表单界面，支持数据获取，数据校验

```javascript
import FormViewer from 'belvoly-form-studio'
```
```html
<form-viewer :designModel="designModel"></form-viewer>
```

效果
![img](./doc/img/formviewer.png)