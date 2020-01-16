import { Config, IControl } from '../config'
import Component from './Index.vue'
import { IProperty } from '@/components/interface'
import { LabelProperty, OptionsProperty, OptionsAlignProperty } from '../props'

const config: Config = {
    name: 'checkbox',
    text: '多选',
    icon: 'ic_title',
    prop: {
        label: '多选',
        optionsAlign: 'inline-block',
        options: [
            { text: '选项1', value: '选项1', id: 1 },
            { text: '选项2', value: '选项2', id: 2 },
            { text: '选项3', value: '选项3', id: 3 }
        ]
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
    propertys: props
}

export default control
