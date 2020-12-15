import { DesignModel, IControl } from '../interface'
import { Component } from './component'

export declare class Viewer extends Component {
    /**
     * 初始的JSON Model
     */
    defaultModel: DesignModel
    /**
     * 表单默认的数据，第一次有用
     */
    defaultValue: any

    /**
     * 表单元素根据控件属性的哪个字段获取值，默认 'id'
     * @default id
     */
    itemValueField: string
    /**
     * 提供给控件的额外数据
     */
    extra: any

    /**
     * 验证表单元素
     */
    validate()

    /**
     * 获取表单数据
     */
    getData()

    /**
     * 获取控件的值
     * @param control 控件
     */
    getControlValue(control: IControl): any

    /**
     * 根据ID获取控件
     * @param id 控件ID
     */
    getControl(id: string): IControl
}
