export interface Config {
    name: string;
    text: string;
    icon: string;
    prop: any;
    [propName: string]: any;
}

export interface Control {
    component: any;
}

export interface IControl {
    config: Config,
    component: any,
    propertyEditor?: any
}
