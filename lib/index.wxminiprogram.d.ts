import { Tab } from "./index";
export declare class TabWXClient extends Tab {
    isClient: boolean;
    req: import("taro-axios").AxiosStatic;
    token: any;
    client: {
        isWX: boolean;
        isAli: boolean;
        isPC: boolean;
    };
    socket: any;
    constructor(config?: object);
    start(): void;
    assignMe(me: any): {};
    makeSocketEvents(): void;
}
declare module "@vue/runtime-core" {
    interface ComponentCustomProperties {
        $TabWXClient: typeof TabWXClient;
        $tab: any;
    }
}
export declare const TabWxVue: {
    install: (app: any, options: any) => void;
};
