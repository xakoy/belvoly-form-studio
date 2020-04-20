import Vue from 'vue'
import { Design } from './components/design'
import { Viewer } from './components/viewer'
import { FormDesign } from './components/form-design'
import * as Controls from './controls/control'
import * as Properties from './controls/props'
import { createControlInstance, convertDesignControlModel, createControlByDesignControlModel } from './controls/controlUtil'

export function install(vue: typeof Vue)

export { Design, Viewer, FormDesign }
export { Controls, Properties, createControlInstance, convertDesignControlModel, createControlByDesignControlModel }
