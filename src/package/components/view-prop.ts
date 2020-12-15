import { Viewer } from './viewer'
import { IControl } from '../controls'

const SYM_VIEW_PROP_KEY = 'BFS_SYMBOL_view-prop-key'

export interface ItemBindOptions {
    (control: IControl): { [key: string]: any }
}

export interface ViewPubPropModel {
    itemBindOptions?: ItemBindOptions
    viewer: Viewer
}

export { SYM_VIEW_PROP_KEY }
