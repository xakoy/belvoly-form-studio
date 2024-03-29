import { Config, IControl } from '../config'
import Text from './Index.vue'
import { IProperty, IRule } from '../../interface'
import { LabelProperty, MaxLengthProperty, PlaceholderProperty, RequiredRule, TextTypeRule, RegexpRule } from '../props'
import { Property } from '../props/property'
import DefaultValuePropertyEditor from './DefaultValuePropertyEditor.vue'

const TextConfig: Config = {
    name: 'text',
    text: '单行文本框',
    icon: 'icon-text_bold2',
    isData: true,
    prop: {
        label: '单行文本框',
        maxLength: 30,
        placeholder: ''
    },
    rule: {
        required: false,
        type: null,
        regexp: null
    }
}

const props: IProperty[] = [new LabelProperty('单行文本框'), new MaxLengthProperty(30), new Property('defaultValue', DefaultValuePropertyEditor, ''), new PlaceholderProperty()]

const rules: IRule<any>[] = [new RequiredRule(), new TextTypeRule(), new RegexpRule()]

const control: IControl = {
    config: TextConfig,
    component: Text,
    propertys: props,
    rules: rules
}

export default control
