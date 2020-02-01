import Compontent from './Index.vue'
import { IControl, IConfig } from '../../interface'
import { Property } from '../props/property'
import ColsPropertyEditor from './ColsPropertyEditor.vue'

const config: IConfig = {
    name: 'guid',
    text: '栅格布局',
    icon: 'text',
    isLayout: true,
    prop: {
        cols: [{
            id: 1,
            span: 12
        }, {
            id: 2,
            span: 12
        }]
    }
}

const control: IControl = {
    config: config,
    component: Compontent,
    propertys: [
        new Property('cols', ColsPropertyEditor, null)
    ],
    child: []
}

export default control
