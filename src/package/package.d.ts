import Vue from 'vue'
import { Design } from './components/design'
import { Viewer } from './components/viewer'
import * as Controls from './controls/control'
import * as Properties from './controls/props'
import { createControlInstance } from './controls/createControl'

export function install(vue: typeof Vue)

export { Design, Viewer }
export { Controls, Properties, createControlInstance }
