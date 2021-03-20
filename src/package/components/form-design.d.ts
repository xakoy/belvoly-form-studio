import { DesignModel } from '../interface'
import { Component } from './component'
import { CanEdit } from './design-prop'

export declare class FormDesign extends Component {
    /**
     * 控件是否可以编辑
     */
    canEdit: CanEdit

    /**
     * 初始的JSON Model
     */
    defaultModel: DesignModel
    /**
     * 提供给控件的额外数据
     */
    extra: any
    /**
     * 是否启用属性验证
     */
    enablePropertyValid: boolean

    /**
     * 获取设计器的JSON Model
     */
    getModel()

    /**
     * 清空设计器
     */
    clear()
}
