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
     * 布局组件空白时显示的文字
     */
    placeholder?: string
    /**
     * 是否需要辅助显示线条
     */
    isNeedSuportDisplay: boolean
}

export { SYM_DESIGN_PROP_KEY }
