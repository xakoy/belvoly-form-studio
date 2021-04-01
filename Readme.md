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
- `mobile`：是否渲染为移动表单，默认 `false`。
#### 方法
- `validate`：验证所有控件。
- `getData`：获取表单的数据

效果
![img](./doc/img/formviewer.png)
## v0.3.1
1. 增加ID生成器，setRenderControlIDFactory
2. `Design` 组件增加`selectControl`，`cancenSelectedControl` 方法
3. `Viewer` 修复 Vue 调试工具选择报错，增加defautlValue变更后，表单值更新
4. `Viewer` 增加isForm属性，否，则不生成form表单元素

## v0.3.0
1. `Design`和`FormDesign`组件增加`itemBindOptions`属性，支持定制每个组件渲染的时候，自定义属性和样式
2. 增加IControlContext，组件渲染上下文
3. `Design`和`FormDesign` 增加 `canEdit` 属性
## v0.2.20
1. 修复支持打包支持es5

## v0.2.19
1.  打包由 Vue-Cli改为 Rollup 打包，精简打包的内容
2. `Grid` 的 `gutter`只能是整数

## v0.2.18
1. `Design`组件增加`dragOptions`属性和`dragStart`、`dragEnd`事件

## v0.2.17
1. Grid 的列属性不可以设置小数

## v0.2.16
1. `Design`、`FormDesign`组件增加`itemDbClick`事件
2. 增加内部组件`DesignDraggable`导出
3. 设计模式下，itemClick, itemDbClick事件增加了extra: {zone, event}的参数

## v 0.2.15
1. 修复Grid组件没有触发Design的change事件
2. `Design`、`FormDesign`的placeholder slot添加zone属性

## v 0.2.14
1. 修复IE 11 Grid组件inject mode属性报错
2. 修复IE 11 Grid样式问题

## v 0.2.13
1. Design组件增加`isPreventOnFilter`属性, boolean类型，在filter事件的时候，是否阻止默认事件，参见`sortablejs`设置

## v 0.2.12
1. FormDesign组件的属性和验证属性组件都支持extra获取
2. 控件的icon现在和样式名一样
3. 调整FormDesign组件的样式名统一

## v 0.2.11
1. Guid组件重命名为Grid
2. Grid组件增加gutter属性，栅格之间的间距
3. 增加内部组件DesignZone、ViewZone导出
4. DesignZone 增加 `replaceControl`、`beforeControl`、`afterControl`方法
5. IProperty 增加`tag`属性

## v 0.2.10
1. FormDesign、Design、Viewer组件增加extra属性，用于向子组件提供额外数据，子组件通过extra属性获取。extra必须是json格式。不是必须的

## v 0.2.9
1. Vue.install选项增加isUseDefaultControls选项，是否启用默认的控件，默认true
2. Vue.install选项增加isRegisterComponent选项，是否注册全局Vue组件，默认false，`bfs-design`、`bfs-form-design`、`bfs-viewer`

## v 0.2.8
1. 增加属性验证为必填时，显示红色的*号
2. 修复属性过多超出部分没有显示，增加滚动条

## v 0.2.7
1. 增加FormDesign组件属性验证功能，通过enablePropertyValid属性控制，默认为false。当为true时，属性如果不通过，再添加或切换其它组件会提示信息
2. 增加FormDesign组件itemAdd事件
3. 增加FormDesign组件validate方法，验证属性是否通过
4. 移除属性编辑器字样，改为当前组件：

## v 0.2.6
1. 修复FormDesign组件在defaultModel有值，再拖拽新的控件，可能遇见key重复报错

## v 0.2.5
1. 修复Guid控件没有支持readonly