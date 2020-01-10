import { Config, IControl } from '../config'
import Component from './Index.vue'

const config: Config = {
    name: 'divider',
    text: '分割线',
    icon: 'sidebar_hr',
    prop: {
        label: '分割线'
    }
}

const control: IControl = {
    config: config,
    component: Component
}

export default control
