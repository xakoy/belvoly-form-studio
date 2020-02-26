import { IPropertyControlPlugin } from '../../interface'
import Editor from './Text.vue'

export class FieldTextPropertyControlPlugin implements IPropertyControlPlugin {
    propName: string = 'fieldText'
    editor: any = Editor
    defaultValue: any = ''
    name: string = 'FieldTextProperty'
}
