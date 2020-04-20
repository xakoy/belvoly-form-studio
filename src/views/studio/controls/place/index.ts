import { IControl, IConfig } from '@/package/interface'
import Compontent from './Index.vue'

const config: IConfig = {
    name: 'place',
    icon: '',
    text: '占位',
    isLayout: true,
    prop: {}
}

const control: IControl = {
    config: config,
    component: Compontent
}

export default control
