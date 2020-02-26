import { IPropertyControlPlugin } from '../../interface'
import Editor from './Name.vue'

export class FieldNamePropertyControlPlugin implements IPropertyControlPlugin {
    propName: string = 'fieldName'
    editor: any = Editor
    defaultValue: any = ''
    name: string = 'FieldProperty'
}
