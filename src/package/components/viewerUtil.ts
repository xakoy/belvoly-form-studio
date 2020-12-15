import { IControl } from '../controls'

export function getFieldName(control: IControl, itemValueField = 'id') {
    if (itemValueField === 'id') {
        return control.id
    }
    return control.config.prop[itemValueField]
}

export function findControl(controls: IControl[], predicate: (item: IControl) => boolean) {
    const re = controls.find(predicate)
    if (re) {
        return re
    }

    for (const item of controls.filter(item => item.child && item.child.length > 0)) {
        const r2 = findControl(item.child, predicate)
        if (r2) {
            return r2
        }
    }

    return null
}
