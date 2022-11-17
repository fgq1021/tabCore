import { Tab } from "./index";
import Bowser from "bowser";
export declare class TabClient extends Tab {
    req: any;
    isClient: boolean;
    token: any;
    ua: Bowser.Parser.ParsedResult;
    client: {
        isWX: RegExpMatchArray;
        isAli: RegExpMatchArray;
        isPC: boolean;
    };
    socket: any;
    constructor(config?: object);
    start(config?: any): Promise<void>;
    makeSocketEvents(): void;
    assignMe(me: any): {};
    clearMe(): void;
}
export declare const TabClientVue: {
    install: (app: any, options: any) => void;
};
