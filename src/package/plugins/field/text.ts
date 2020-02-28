import { IPropertyControlPlugin } from '../../interface'
import Editor from './Text.vue'

export class FieldTextPropertyControlPlugin implements IPropertyControlPlugin {
    propName = 'fieldText'
    editor: any = Editor
    defaultValue: any = ''
    name = 'FieldTextProperty'
}
