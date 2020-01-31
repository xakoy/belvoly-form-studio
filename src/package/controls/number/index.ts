import { Config, IControl } from '../config'
import Number from './Index.vue'
import { LabelProperty } from '../props'

const NumberConfig: Config = {
    name: 'number',
    text: '数值',
    icon: 'task_custom_looks_6',
    prop: {
        label: '数值'
    }
}

const control: IControl = {
    config: NumberConfig,
    component: Number,
    propertys: [
        new LabelProperty()
    ]
}

export default control