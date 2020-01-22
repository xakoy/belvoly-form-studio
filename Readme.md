# belvoly-form-studio

动态表单创建和渲染的组件， 基于 `Vue` 和 `Typescript`，UI 采用了 `element-ui`。

## 组件
两大组件 `Design` 和 `Viewer`。

### Design 组件
> 设计器组件，此组件提供拖拽方式完成表单的设计，并返回设计器的JSON Model。

```javascript
import { Design } from 'belvoly-form-studio'

export default {
    method: {
        get () {
            // 获取设计器的JSON Model
            const designModel = this.$refs.designer.getModel()
        }
    }
}
```
```html
<design :defaultModel="defaultDesignModel" ref="designer"></design>
```
#### 属性
- `defaultModel`：在设计器打开时默认设计数据，默认为null即可。此属性用在编辑时，或导入json时使用.
#### 方法  
- `getModel`：获取设计器的JSON Model
- `clear`: 清空设计器


效果
![design](./doc/img/design.png)

### Viewer 组件
> 此组件将Design组件的JSON Model 转为表单界面，支持数据获取，数据校验

```javascript
import { Viewer } from 'belvoly-form-studio'
```
```html
<viewer :designModel="designModel"></viewer>
```
#### 属性
- `defaultModel`：设计器生成的模型数据，Viewer根据此模型数据渲染表单.
- `defaultValue`：表单默认的数据，第一次有用。
- `itemValueField`：表单元素根据控件属性的哪个字段获取值，默认 'id'。
#### 方法
- `validate`：验证所有控件。
- `getData`：获取表单的数据

效果
![img](./doc/img/formviewer.png)