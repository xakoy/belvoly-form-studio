import Vue from 'vue'
import BelvolyFormStudio from './studio'
import { Design, Viewer } from './components'
import * as Controls from './controls/control'
import * as Properties from './controls/props'

const Studio = new BelvolyFormStudio()

const install = (vue: typeof Vue) => {
    vue.component('bfs-design', Design)
    vue.component('bfs-viewer', Viewer)
}

export default {
    install,
    Studio,
    Design,
    Viewer,
    Controls,
    Properties
}
