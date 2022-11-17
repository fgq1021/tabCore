import { tabClientController } from "../core/tab.client.controller";
export declare class usersClientController extends tabClientController {
    className: string;
    authUrl: any;
    constructor(config: any);
    create(el: any): Promise<any>;
    authMe(): Promise<any>;
    authPassword(tel: string, password: string): Promise<any>;
}
