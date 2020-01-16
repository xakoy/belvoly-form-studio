import { IPropertyControlPlugin } from '../../interface'

export class FieldPropertyControlPlugin implements IPropertyControlPlugin {
    propName: string = 'fieldName'
    editor: any = import('./Index.vue')
    defaultValue: any = ''
    name: string = 'FieldProperty'
}
