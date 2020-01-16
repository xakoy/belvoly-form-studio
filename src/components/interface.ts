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
    propertyEditor?: any,
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
