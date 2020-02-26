import { Config, IControl } from '../config'
import Component from './Index.vue'
import { LabelProperty, ColorProperty, PaddingProperty } from '../props'

const config: Config = {
    name: 'divider',
    text: '分割线',
    icon: 'sidebar_hr',
    prop: {
        label: '分割线',
        color: '',
        padding: {
            top: 10,
            bottom: 10
        }
    }
}

const control: IControl = {
    config: config,
    component: Component,
    propertys: [new LabelProperty(), new ColorProperty(), new PaddingProperty()]
}

export default control
