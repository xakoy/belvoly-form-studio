import { Config, IControl } from '../config'
import Component from './Index.vue'
import { IProperty } from '../../interface'
import { LabelProperty, OptionsProperty, OptionsAlignProperty, RequiredRule } from '../props'

const config: Config = {
    name: 'checkbox',
    text: '多选',
    icon: 'icon-ic_title',
    isData: true,
    prop: {
        label: '多选',
        optionsAlign: 'inline-block',
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

const props: IProperty[] = [
    new LabelProperty('单行文本框'),
    new OptionsProperty([
        { text: '选项1', value: '选项1', id: 1 },
        { text: '选项2', value: '选项2', id: 2 },
        { text: '选项3', value: '选项3', id: 3 }
    ]),
    new OptionsAlignProperty('inline-block')
]

const control: IControl = {
    config: config,
    component: Component,
    propertys: props,
    rules: [new RequiredRule(c => `请选择${c.config.prop.label}`)]
}

export default control
