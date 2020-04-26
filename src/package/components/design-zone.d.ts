import { IControl } from '../interface'
import { Component } from './component'

export declare class DesignZone extends Component {
    /**
     * 新增一个控件
     * @param control 控件
     */
    addControl(control: IControl)

    /**
     * 删除一个控件
     * @param control 控件
     */
    removeControl(control: IControl)

    /**
     * 在当前控件前面插入一个新的控件
     * @param control 要插入的控件
     * @param currentControl 当前的控件
     */
    beforeControl(control: IControl, currentControl: IControl)

    /**
     * 使用一个新的控件替换当前的控件
     * @param control 要插入的控件
     * @param currentControl 当前的控件
     */
    replaceControl(control: IControl, currentControl: IControl)

    /**
     * 在当前的控件后面插入一个新的控件
     * @param control 要插入的控件
     * @param currentControl 当前的控件
     */
    afterControl(control: IControl, currentControl: IControl)
}
