export declare class tabClientController {
    req: any;
    apiUrl: string;
    api: string;
    module: any;
    className: any;
    protected tab: any;
    private childrenList;
    constructor(config: any, unit: any);
    putTab(tab: any, module: any): void;
    apiConfig(progress?: any): {
        headers: {};
        onUploadProgress: (progressEvent: any) => void;
    };
    get(id: any): any;
    eventSync(el: any, _el?: any): void;
    watch(id: any): void;
    hotReloadRestart(): void;
    makeList(_data: any): any;
    children(parentString: any, filter?: object, sort?: object, limit?: number, skip?: number): any;
    childrenWaiter(parentString: any, limit?: number, skip?: number): Promise<any>;
    childrenFromCache(parentString: any, limit?: number, skip?: number): Promise<any>;
    childrenFromController(parentString: any, limit?: number, skip?: number): Promise<any>;
    deleteFromChildren(delId: any): void;
    deleteFromThisChildren(delId: any): void;
    childrenRefresh(parentString: any, type?: any, changeId?: any): Promise<void>;
    listMy(finder: any, sort: any, limit: any, skip: any): any;
    list(finder: any, sort: any, limit: any, skip: any): any;
    create(el: any): any;
    delete(id: any): Promise<any>;
    save(el: any): any;
    upload(file: any, id: any, place: any, key: any, progress?: any): Promise<any>;
    uploadDirectory(files: any, id: any, place?: string, key?: string, progress?: any): Promise<any>;
    uploadDirectoryCtrl(files: any, id: any, place?: string, key?: string, progress?: any): Promise<any>;
}
