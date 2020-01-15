import Text from './text'
import NumberControl from './number'
import Title from './title'
import Radio from './radio'
import Checkbox from './checkbox'
import Divider from './divider'
import Unknown from './unknown'
import DateControl from './date'
import Guid from './guid'
import { IControl, IPropertyControlPlugin } from '../interface'
import { DesignControlModel, DesignModel } from '../model'

const controls: IControl[] = [
    Text,
    NumberControl,
    Radio,
    Checkbox,
    DateControl,
    Title,
    Divider,
    Guid
]

function buildControl (control: IControl, model: DesignControlModel) {
    const con = { ...control, id: model.id, child: model.child }
    con.config = { ...control.config, prop: { ...control.config.prop, ...model.prop } }

    if (con.child) {
        con.child = con.child.map(item => {
            if (Array.isArray(item)) {
                return item.map(i => {
                    return createControl(i)
                })
            } else {
                return createControl(item)
            }
        })
    }

    return con
}

function createControl (model: DesignControlModel): IControl {
    const control = controls.find(c => c.config.name === model.name)
    if (control) {
        return buildControl(control, model)
    }
    return Unknown
}

/**
 * 根据设计器生成的模型，构建控件
 * @param model 设计模型
 */
export function createControls (model: DesignModel) {
    return model.controls.map(c => createControl(c))
}

export function registerControlPlugin (name: string, plugin: IPropertyControlPlugin) {
    const control = controls.find(c => c.config.name === name)
    control.config.prop[plugin.propName] = plugin.defaultValue || null
    control.propertys.push(plugin)
}

export default controls

export {
    IControl
}
