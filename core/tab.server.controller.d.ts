export default class tabServerController {
    Model: any;
    className: any;
    protected tab: any;
    module: any;
    ossClient: any;
    aliOss: any;
    private childrenList;
    private updateTimer;
    constructor(config: any);
    putTab(tab: any, module: any): void;
    get(id: string): Promise<any>;
    eventSync(el: any, _el?: any): void;
    unitUpdate(id: any, data?: {
        changeId: any;
        type: string;
    }, timer?: any): void;
    matchReg(array: any): any;
    children(parentString: any, _filter?: object, _sort?: object, limit?: number, skip?: number, user?: any): Promise<any>;
    childrenWaiter(id: string, place?: string, key?: string, filter?: object, sort?: any, limit?: number, skip?: number, user?: any): Promise<any>;
    childrenFromCache(id: string, place?: string, key?: string, filter?: object, sort?: string, limit?: number, skip?: number, user?: any): Promise<any>;
    childrenFromController(id: string, place?: string, key?: string, _sort?: any, limit?: number, skip?: number): Promise<any>;
    lastChildren(id: string, place?: string, key?: string, _sort?: any): Promise<any>;
    childrenRefresh(parentString: any, addId?: any, delId?: any): Promise<void>;
    deleteFromChildren(id: any): void;
    childrenFromControllerWithOption(id: string, place: string, key: string, _filter: object, _sort: object, limit: number, skip: number, user: any): Promise<any>;
    list(finder?: object, sort?: object, limit?: number, skip?: number): Promise<any>;
    create(el: any, user?: any): Promise<any>;
    writeParse(el: any, rights: any, user?: any): any;
    save(el: any, user?: any): Promise<any>;
    delete(id: any, user: any): Promise<{
        message: string;
    }>;
    upload(file: any, id: any, place?: string, key?: string, p?: any, user?: any): Promise<any>;
    uploadDirectory(files: any, id: any, place?: string, key?: string, p?: any, user?: any): Promise<any>;
}
