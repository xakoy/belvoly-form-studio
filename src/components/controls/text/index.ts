import { Config, IControl } from '../config'
import Text from './Index.vue'
import Editor from './PropertyEditor.vue'

const TextConfig: Config = {
    name: 'text',
    text: '单行文本框',
    icon: 'text_bold2',
    prop: {
        label: '单行文本框',
        maxLength: 30,
        rule: {
            required: false,
            type: null,
            regexp: null
        }
    }
}

const control: IControl = {
    config: TextConfig,
    component: Text,
    propertyEditor: Editor
}

export default control
