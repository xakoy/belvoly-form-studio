import Vue from 'vue'
import { Design } from './components/design'
import { Viewer } from './components/viewer'
import { FormDesign } from './components/form-design'
import * as Controls from './controls/control'
import * as Properties from './controls/props'
import { createControlInstance, convertDesignControlModel, createControlByDesignControlModel } from './controls/controlUtil'

export interface InstallationOptions {
    /**
     * 是否启用默认控件，默认true
     */
    isUseDefaultControls: boolean
    /**
     * 是否注册全局组件，默认false
     */
    isRegisterComponent: boolean
}
export function install(vue: typeof Vue, options: InstallationOptions)

export { Design, Viewer, FormDesign }
export { Controls, Properties, createControlInstance, convertDesignControlModel, createControlByDesignControlModel }
