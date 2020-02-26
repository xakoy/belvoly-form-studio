import { IControl, IConfig } from '@/package/form-studio/interface'
import Compontent from './Index.vue'

const config: IConfig = {
    name: 'empty',
    icon: '',
    text: '空',
    prop: {}
}

const control: IControl = {
    config: config,
    component: Compontent
}

export default control
