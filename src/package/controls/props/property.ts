import { IProperty } from '../../interface'

export class Property implements IProperty {
    constructor(propName: string, editor: any, defaultValue: any, required = false, rules?: any) {
        this.propName = propName
        this.defaultValue = defaultValue
        this.editor = editor
        if (required) {
            this.rules = { required: true, message: '请填写' }
        }
        if (rules) {
            this.rules = rules
        }
    }
    readonly propName = null
    readonly defaultValue = null
    readonly editor = null
    readonly rules = null
}
