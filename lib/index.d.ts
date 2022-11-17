export declare class Tab {
    me: {};
    token: string;
    manage: any[];
    system: any;
    users: any;
    types: any;
    elements: any;
    reactive: any;
    config: {
        _id: string;
        apiUrl: string;
        secret: string;
        port: string;
        ssl: {
            key: any;
            cert: any;
        };
        mongo: {
            user: string;
            username: string;
            pass: string;
            host: string;
            port: number;
            db: string;
        };
        users: {
            root: {
                _id: string;
            };
        };
    };
    moduleList: any[];
    typeModules: {};
    constructor(config?: any);
    start(config?: any): void;
    assignMe(me: any): {};
    clearMe(): void;
    makeList(list: any, option: any): any;
    pureData(d: any): any;
    injectModule(m: any, c: any): void;
    importType(t: any): void;
    parseUnit(u: string): {
        unit: string;
        units: string;
        Units: string;
        Unit: string;
    };
    parsePlaceString(s: string): any;
    get(placeString: any, user?: any): Promise<any>;
    assign(el: any): any;
    genSecret(passwordLength?: number): string;
    private eventFn;
    on(event: any, fn: any): void;
    runEventFn(event: any, msg: any): Promise<boolean>;
}
