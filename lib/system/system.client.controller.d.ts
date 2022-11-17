import { tabClientController } from "../core/tab.client.controller";
export declare class systemClientController extends tabClientController {
    className: string;
    apiUrl: string;
    config: any;
    constructor(config: any);
    getConfig(): Promise<any>;
}
