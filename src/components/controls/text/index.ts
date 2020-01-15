import { Config, IControl } from '../config'
import Text from './Index.vue'
import Editor from './PropertyEditor.vue'
import { IProperty } from '@/components/interface'
import { LabelProperty, MaxLengthProperty } from '../props'

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

const props: IProperty[] = [
    new LabelProperty('单行文本框'),
    new MaxLengthProperty(30)
]

const control: IControl = {
    config: TextConfig,
    component: Text,
    propertyEditor: Editor,
    propertys: props
}

export default control
