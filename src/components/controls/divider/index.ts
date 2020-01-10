import { Config } from '../config'
import Component from './Index.vue'

const config: Config = {
    name: 'divider',
    text: '分割线',
    icon: 'sidebar_hr',
    prop: {
        label: '分割线'
    }
}

export {
    config as DividerConfig,
    Component as Divider
}
