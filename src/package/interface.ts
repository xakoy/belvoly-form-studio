export interface IConfig {
    name: string;
    text: string;
    icon: string;
    prop: any;
    rule?: any;
    isLayout?: boolean;
    [propName: string]: any;
}

export interface IControl {
    id?: any,
    config: IConfig,
    component: any,
    child?: Array<any>
    propertys?: IProperty[],
    rules?: IRule<any>[]
}

export interface IControlPlugin {
    /**
     * 插件的名称，必须唯一
     */
    name: string;
}

export interface IProperty {
   /**
    * 属性名称
    */
   propName: string;
   /**
    * 属性编辑器
    */
   editor: any;
   /**
    * 属性的默认值
    */
   defaultValue?: any;
}

/**
 * 属性插件接口，目前属性只支持添加数据属性，这些属性不影响控件的现实效果
 */
export interface IPropertyControlPlugin extends IControlPlugin {
    /**
     * 属性名称
     */
    propName: string;
    /**
     * 属性编辑器
     */
    editor: any;
    /**
     * 属性的默认值
     */
    defaultValue: any;
}

export interface IRule<T> {
    /**
     * 规则名称
     */
    ruleName: string;
    /**
     * 属性的默认值
     */
    defaultValue: T;
    /**
     * 规则属性编辑器
     */
    editor: any;
    /**
     * 获取规则
     */
    getRule (value:T, control: IControl, vue: Vue);

}

export interface DesignModel {
    controls: DesignControlModel[],
    form: FormPropertyModel
}

/**
 * 表单文本位置
 */
export type LabelPosition = 'left' | 'right' | 'top'

/**
 * 表单属性接口
 */
export interface FormPropertyModel {
    /**
     * 必填是否显示红点
     */
    requiredShowPoint: boolean
    /**
     * label的位置
     */
    labelPosition: LabelPosition
    /**
     * label的宽度，在labelPosition位置为 left | right 起作用
     */
    labelWidth?: number,
    /**
     * label的后缀
     */
    labelSuffix?: string
}

export interface DesignControlModel {
    id: any;
    prop: any;
    rule?: any;
    name: string;
    child?: Array<any>;
}
