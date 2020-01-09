export interface Config {
    name: string;
    text: string;
    icon: string;
    [propName: string]: any;
}

export interface Control {
    component: any;
}