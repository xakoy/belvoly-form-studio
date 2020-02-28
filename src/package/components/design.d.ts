import { DesignModel } from '../interface'
import { Component } from './component'
import { CanMoveFunc } from './design-prop'
import { IControl } from '../controls'

export declare class Design extends Component {
    /**
     * 初始的JSON Model
     */
    defaultModel: DesignModel

    /**
     * 拖动控件默认的索引值
     */
    beginIndex: number

    /**
     * 布局控件空白时显示的文本
     */
    placeholder: string

    /**
     * 控件是否可以拖动
     */
    canMove: CanMoveFunc

    /**
     * 是否需要辅助显示线条
     * @default false
     */
    isNeedSuportDisplay: boolean

    /**
     * 设计器所有控件集合，默认不用传值，当值不为空，则解析的控件始终在数组查找
     */
    allControls: IControl[]

    /**
     * 获取设计器的JSON Model
     */
    getModel()

    /**
     * 清空设计器
     */
    clear()
}
