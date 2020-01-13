export interface Config {
    name: string;
    text: string;
    icon: string;
    prop: any;
    isLayout?: boolean;
    [propName: string]: any;
}

export interface Control {
    component: any;
}

export interface IControl {
    id?: any,
    config: Config,
    component: any,
    propertyEditor?: any,
    child?: Array<any>
}
