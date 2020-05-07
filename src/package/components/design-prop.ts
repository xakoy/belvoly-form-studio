import { IControl } from '../controls'

const SYM_DESIGN_PROP_KEY = Symbol('design-prop-key')

export interface CanMoveFunc {
    (control: IControl): boolean
}

export interface DesignPubPropModel {
    /**
     * 是否可以移动
     */
    canMove?: CanMoveFunc
    /**
     * 布局控件空白时显示的文字
     */
    placeholder?: string
    /**
     * 布局控件空白时,显示的slot vnode
     */
    placeholderSlot?: any
    layoutmoreSlot?: any
    /**
     * 是否需要辅助显示线条
     */
    isNeedSuportDisplay: boolean
}

export { SYM_DESIGN_PROP_KEY }
