import { IPropertyControlPlugin } from '../../interface'
import Editor from './Index.vue'

export class FieldPropertyControlPlugin implements IPropertyControlPlugin {
    propName: string = 'fieldName'
    editor: any = Editor
    defaultValue: any = ''
    name: string = 'FieldProperty'
}
