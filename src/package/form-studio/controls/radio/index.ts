import { Config, IControl } from '../config'
import Component from './Index.vue'
import { LabelProperty, OptionsProperty, OptionsAlignProperty, RequiredRule } from '../props'

type OptionsAlign = 'inline-block' | 'block' | 'select'

const config: Config = {
    name: 'radio',
    text: '单选',
    icon: 'ic_title',
    isData: true,
    prop: {
        label: '单选',
        optionsAlign: 'inline-block' as OptionsAlign,
        options: [
            { text: '选项1', value: '选项1', id: 1 },
            { text: '选项2', value: '选项2', id: 2 },
            { text: '选项3', value: '选项3', id: 3 }
        ]
    },
    rule: {
        required: false
    }
}

const control: IControl = {
    config: config,
    component: Component,
    propertys: [new LabelProperty(), new OptionsProperty(), new OptionsAlignProperty()],
    rules: [new RequiredRule(c => `请选择${c.config.prop.label}`)]
}

export default control
