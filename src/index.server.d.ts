import { Tab } from "./index";
export declare class TabServer extends Tab {
    readonly isClient = false;
    socket: any;
    rootPath: any;
    configPath: any;
    constructor(config: object);
    start(config?: any): Promise<boolean>;
    close(): Promise<void>;
    margeConfig(config?: {}): Promise<{}>;
    getConfig(): Promise<boolean>;
    makeConfig(id: any): Promise<any>;
    initialization(): Promise<any>;
    writeSystemConfig(): Promise<any>;
    createDefaultTypes(typeName: any, parent: any, placeString: any, createdTypes?: {}, array?: any): Promise<any>;
    createUnitDeep(el: any, parent: any, placeString: any): Promise<any>;
    systemRepair(): Promise<boolean>;
    resetDatabase(): Promise<void>;
    backupDatabase(): Promise<{}>;
    restoreDatabase(info: any, collections: any, cover?: boolean): Promise<boolean>;
    connectMongo(config?: object): Promise<unknown>;
    putSocket(socket: any): void;
}
