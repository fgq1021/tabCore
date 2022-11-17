import { tabModule } from "../core/tab.module";
export declare class elements extends tabModule {
    className: string;
    unit: any;
    constructor(config: any, controller: any);
    updateFromTabOS2(): Promise<void>;
    updateBtoDot(): Promise<void>;
}
