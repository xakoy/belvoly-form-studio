import { Config, IControl } from '../config'
import Component from './Index.vue'
import { LabelProperty, ColorProperty, FontSizeProperty, TextAlignProperty, PaddingProperty } from '../props'

const config: Config = {
    name: 'title',
    text: '标题',
    icon: 'icon-text_bold2',
    prop: {
        color: '',
        label: '标题',
        fontsize: '14',
        textAlign: 'center',
        padding: {
            top: 10,
            bottom: 10,
            left: 0,
            right: 0
        }
    }
}

const control: IControl = {
    config: config,
    component: Component,
    propertys: [new LabelProperty(), new ColorProperty(), new FontSizeProperty(), new TextAlignProperty(), new PaddingProperty()]
}

export default control
