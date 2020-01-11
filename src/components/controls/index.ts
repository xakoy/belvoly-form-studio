import Text from './text'
import NumberControl from './number'
import Title from './title'
import Radio from './radio'
import Checkbox from './checkbox'
import Divider from './divider'
import Unknown from './unknown'
import { Config, IControl } from './config'
import { DesignControlModel, DesignModel } from '../model'

const controls: IControl[] = [
    Text,
    NumberControl,
    Radio,
    Checkbox,
    Title,
    Divider
]

function buildControl (control: IControl, model: DesignControlModel) {
    const con = { ...control, id: model.id }
    con.config = { ...control.config, prop: { ...control.config.prop, ...model.prop } }

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

export default controls

export {
    IControl
}
