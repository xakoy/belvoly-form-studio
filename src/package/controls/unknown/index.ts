import { Config, IControl } from '../config'
import Component from './Index.vue'

const config: Config = {
    name: 'unkown',
    text: '未识别',
    icon: 'text_bold2',
    prop: {
        label: '未识别'
    }
}

const control: IControl = {
    config: config,
    component: Component
}

export default control
