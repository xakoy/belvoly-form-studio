import Vue from 'vue'
import BelvolyFormStudio from './studio'
import Design from './Design.vue'
import FormViewer from './FormViewer.vue'

let instance = new BelvolyFormStudio()

const install = (vue: typeof Vue) => {
    vue.component('bfs-design', Design)
    vue.component('bfs-viewer', FormViewer)
}

export default {
    install,
    Design,
    FormViewer
}
