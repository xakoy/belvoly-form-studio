import { Config, IControl } from '../config'
import Number from './Index.vue'
import { LabelProperty, PlaceholderProperty } from '../props'

const NumberConfig: Config = {
    name: 'number',
    text: '数值',
    icon: 'task_custom_looks_6',
    isData: true,
    prop: {
        label: '数值'
    }
}

const control: IControl = {
    config: NumberConfig,
    component: Number,
    propertys: [new LabelProperty(), new PlaceholderProperty()]
}

export default control
