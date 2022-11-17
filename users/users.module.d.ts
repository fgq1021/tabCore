import { tabModule } from "../core/tab.module";
export declare class users extends tabModule {
    className: string;
    unit: any;
    constructor(config: any, controller: any);
    create(el: any, user?: any): Promise<any>;
    authPassword(tel: string, password: string): Promise<any>;
    getSmsCode(tel: any): any;
    authSmsCode(tel: any, code: any, device: any, userInfo: any): any;
    authMe(): Promise<any>;
    getAuth(id: string): Promise<any>;
}
