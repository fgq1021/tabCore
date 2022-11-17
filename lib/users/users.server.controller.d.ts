/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import tabServerController from "../core/tab.server.controller";
export declare class usersServerController extends tabServerController {
    className: string;
    Model: import("mongoose").Model<{}, {}, {}, {}, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {}>>;
    private smsClient;
    private sms;
    private tempCode;
    private users;
    constructor(config: any);
    get(id: string): Promise<any>;
    create(el: any, user?: any): Promise<any>;
    assignUserInfo(user: any, userInfo: any): any;
    authParse(user: any): Promise<any>;
    findOne(finder: object): Promise<any>;
    authPassword(tel: string, password: string): Promise<any>;
    authMe(): Promise<any>;
    getSmsCode(tel: any): any;
    authSmsCode(tel: any, code: any, device: any, userInfo: any): Promise<any>;
}
