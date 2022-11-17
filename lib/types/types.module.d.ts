import { tabModule } from "../core/tab.module";
export declare class types extends tabModule {
    className: string;
    unit: any;
    keys: any;
    constructor(config: any, controller: any);
    getKeys(): Promise<any>;
    listMy(finder?: object, sort?: object, limit?: number, skip?: number, user?: any): Promise<any>;
    find(finder?: object, sort?: object, limit?: number, skip?: number, user?: any): Promise<any>;
}
