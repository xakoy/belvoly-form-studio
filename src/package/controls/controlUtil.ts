import { DesignModel, IControl, DesignControlModel } from '../interface'
import { Unknown } from './control'
import { getUnniID } from '../utils'

function buildControl(control: IControl, model: DesignControlModel, cs: IControl[]) {
    const con = { ...control, id: model.id, child: model.child }
    con.config = {
        ...control.config,
        name: model.name,
        prop: { ...control.config.prop, ...model.prop },
        rule: { ...control.config.rule, ...model.rule }
    }

    if (con.child) {
        con.child = con.child.map(item => {
            if (Array.isArray(item)) {
                return item.map(i => {
                    return createControlByDesignControlModel(i, cs)
                })
            } else {
                return createControlByDesignControlModel(item, cs)
            }
        })
    }

    return con
}

export function createControlByDesignControlModel(model: DesignControlModel, cs: IControl[]): IControl {
    const control = cs.find(c => c.config.name === model.name)
    if (control) {
        return buildControl(control, model, cs)
    }
    return buildControl(Unknown, model, cs)
}

/**
 * 根据设计器生成的模型，构建控件
 * @param model 设计模型
 */
export function createControls(model: DesignModel, cs: IControl[]) {
    return model.controls.map(c => createControlByDesignControlModel(c, cs))
}

/**
 * 创建控件示例
 * @param control 控件类型
 */
export function createControlInstance(control: IControl) {
    const clone = {
        ...control,
        id: getUnniID()
    }
    clone.config = JSON.parse(JSON.stringify(clone.config))
    return clone
}

const convertDesignControlModelChild = (child: any[]) => {
    return child.map(item => {
        return Array.isArray(item) ? convertDesignControlModelChild(item) : convertDesignControlModel(item)
    })
}

export function convertDesignControlModel(control: IControl) {
    const {
        id,
        config: { name, prop, rule, isLayout, isData },
        child
    } = control
    const result: DesignControlModel = {
        id: id,
        name: name,
        isLayout: isLayout,
        isData: isData,
        prop: prop,
        rule: rule
    }
    if (child) {
        result.child = convertDesignControlModelChild(child)
    }
    return result
}
