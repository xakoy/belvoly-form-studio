import Vue from 'vue'
import BelvolyFormStudio from './studio'
import { Design, Viewer } from './components'

let Studio = new BelvolyFormStudio()

const install = (vue: typeof Vue) => {
    vue.component('bfs-design', Design)
    vue.component('bfs-viewer', Viewer)
}

export default {
    install,
    Studio,
    Design,
    Viewer
}
