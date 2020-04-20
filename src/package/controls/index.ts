import Text from './text'
import NumberControl from './number'
import Title from './title'
import Radio from './radio'
import Checkbox from './checkbox'
import Divider from './divider'
import DateControl from './date'
import Guid from './guid'
import { IControl, IPropertyControlPlugin, DesignControlModel, DesignModel } from '../interface'
import { createControls as factoryCreateControls } from './controlUtil'

const controls: IControl[] = [Text, NumberControl, Radio, Checkbox, DateControl, Title, Divider, Guid]

/**
 * 根据设计器生成的模型，构建控件
 * @param model 设计模型
 */
export function createControls(model: DesignModel, cs: IControl[] = controls) {
    return factoryCreateControls(model, cs)
}

export function registerPlugin(name: string, plugin: IPropertyControlPlugin) {
    const control = controls.find(c => c.config.name === name)
    registerControlPlugin(control, plugin)
}

function registerControlPlugin(control: IControl, plugin: IPropertyControlPlugin) {
    control.config.prop[plugin.propName] = plugin.defaultValue || null
    if (!control.propertys) {
        control.propertys = []
    }
    control.propertys.push(plugin)
}

export function registerGlobalPlugin(plugin: IPropertyControlPlugin) {
    controls.forEach(control => {
        registerControlPlugin(control, plugin)
    })
}

export function registerControl(control: IControl) {
    const {
        config: { name }
    } = control
    const index = controls.findIndex(c => c.config.name === name)
    if (index >= 0) {
        console.warn(`组件已经存在，不可以重复注册, name: ${name}`)
        return
    }
    controls.push(control)
}

export default controls

export { IControl }
