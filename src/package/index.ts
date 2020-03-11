import Vue from 'vue'
import BelvolyFormStudio from './studio'
import { Design, Viewer, FormDesign } from './components'
import * as Controls from './controls/control'
import * as Properties from './controls/props'
import { createControlInstance, createControlByDesignControlModel, convertDesignControlModel } from './controls/controlUtil'

const Studio = new BelvolyFormStudio()

const install = (vue: typeof Vue) => {
    vue.component('bfs-design', Design)
    vue.component('bfs-form-design', FormDesign)
    vue.component('bfs-viewer', Viewer)
}

export default {
    install,
    Studio,
    Design,
    FormDesign,
    Viewer,
    Controls,
    Properties,
    createControlInstance,
    createControlByDesignControlModel,
    convertDesignControlModel
}
