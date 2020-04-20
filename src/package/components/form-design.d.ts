import { DesignModel } from '../interface'
import { Component } from './component'

export declare class FormDesign extends Component {
    /**
     * 初始的JSON Model
     */
    defaultModel: DesignModel

    /**
     * 获取设计器的JSON Model
     */
    getModel()

    /**
     * 清空设计器
     */
    clear()
}
