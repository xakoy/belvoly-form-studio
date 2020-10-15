import Vue from 'vue'
import BelvolyFormStudio from './studio'
import { Design, Viewer, FormDesign, DesignZone, ViewerZone, DesignDraggable } from './components'
import { useDefaultControls } from './controls/index'
import * as Controls from './controls/control'
import * as Properties from './controls/props'
import { createControlInstance, createControlByDesignControlModel, convertDesignControlModel } from './controls/controlUtil'

const Studio = new BelvolyFormStudio()

const install = (vue: typeof Vue, { isUseDefaultControls = true, isRegisterComponent = false }) => {
    if (isRegisterComponent) {
        vue.component('bfs-design', Design)
        vue.component('bfs-design-zone', DesignZone)
        vue.component('bfs-design-draggable', DesignDraggable)
        vue.component('bfs-form-design', FormDesign)
        vue.component('bfs-viewer', Viewer)
        vue.component('bfs-viewer-zone', ViewerZone)
    }
    if (!isUseDefaultControls) {
        useDefaultControls()
    }
}

export {
    install,
    Studio,
    Design,
    FormDesign,
    Viewer,
    DesignZone,
    ViewerZone,
    DesignDraggable,
    Controls,
    Properties,
    createControlInstance,
    createControlByDesignControlModel,
    convertDesignControlModel
}
