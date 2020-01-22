import Compontent from './Index.vue'
import { Config } from '../config'
import { IControl } from '../../controls'

const config: Config = {
    name: 'guid',
    text: '栅格布局',
    icon: 'text',
    isLayout: true,
    prop: {

    }
}

const control: IControl = {
    config: config,
    component: Compontent,
    child: []
}

export default control
