import { IProperty } from '../../interface'

export class Property implements IProperty {
    constructor(propName: string, editor: any, defaultValue: any) {
        this.propName = propName
        this.defaultValue = defaultValue
        this.editor = editor
    }
    readonly propName = null
    readonly defaultValue = null
    readonly editor = null
}
