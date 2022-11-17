import { tabClientController } from "../core/tab.client.controller";
export declare class typesClientController extends tabClientController {
    className: string;
    apiUrl: string;
    keys: any[];
    constructor(config: any);
    getKeys(): Promise<any[]>;
}
