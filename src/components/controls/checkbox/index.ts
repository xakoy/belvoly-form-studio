import { Config, IControl } from '../config'
import Component from './Index.vue'
import Editor from './PropertyEditor.vue'

const config: Config = {
    name: 'checkbox',
    text: '多选',
    icon: 'ic_title',
    prop: {
        label: '多选',
        optionsAlign: 'inline-block',
        options: [
            { text: '选项1', value: '选项1' },
            { text: '选项2', value: '选项2' },
            { text: '选项3', value: '选项3' }
        ]
    }
}

const control: IControl = {
    config: config,
    component: Component,
    propertyEditor: Editor
}

export default control