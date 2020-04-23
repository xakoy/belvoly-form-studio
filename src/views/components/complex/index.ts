import { IConfig, IControl } from './../../../package/interface'
import Editor from './Index.vue'

const config: IConfig = {
    name: 'complex',
    text: '复合',
    icon: '',
    prop: {}
}

const control: IControl = {
    config: config,
    component: Editor
}

export default control
