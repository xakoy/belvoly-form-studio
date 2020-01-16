
export interface DesignModel {
    controls: DesignControlModel[]
}

export interface DesignControlModel {
    id: any;
    prop: any;
    rule?: any;
    name: string;
    child?: Array<any>;
}