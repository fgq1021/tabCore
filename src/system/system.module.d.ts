import { tabModule } from "../core/tab.module";
export declare class system extends tabModule {
    className: string;
    unit: any;
    constructor(config: any, controller: any);
    rights(el: any, user?: any): {
        isRoot: boolean;
        isOwner: boolean;
        isAnonymous: boolean;
        isClient: any;
        all(): {
            read: boolean;
            write: boolean;
            isRoot: boolean;
            isOwner: boolean;
        };
        read(): boolean;
        write(): boolean;
    };
    getConfig(config?: {}, user?: any): Promise<any>;
    getFile(user?: any): any;
}
