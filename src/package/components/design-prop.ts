import { IControl } from '../controls'

const SYM_DESIGN_PROP_KEY = 'BFS_SYMBOL_design-prop-key'

export interface CanMoveFunc {
    (control: IControl): boolean
}

export interface ItemBindOptions {
    (control: IControl): { [key: string]: any }
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
    /**
     * 在filter事件的时候，是否阻止默认事件
     */
    isPreventOnFilter: boolean
    /**
     * 开始移动事件
     */
    dragStart?: Function
    /**
     * 结束移动事件
     */
    dragEnd?: Function
    /**
     * dragOptions
     */
    dragOptions?: any

    itemBindOptions?: ItemBindOptions
}

export { SYM_DESIGN_PROP_KEY }
