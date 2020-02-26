import { DesignModel, IControl, DesignControlModel } from '../interface'
import { Unknown } from './control'

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
                    return createControl(i, cs)
                })
            } else {
                return createControl(item, cs)
            }
        })
    }

    return con
}

function createControl(model: DesignControlModel, cs: IControl[]): IControl {
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
    return model.controls.map(c => createControl(c, cs))
}
