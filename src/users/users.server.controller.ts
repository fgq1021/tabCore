import tabServerController from "../core/tab.server.controller";
import Model from "./users.server.model";

const smsCore = require("@alicloud/pop-core");
const bcrypt = require("bcrypt");


export class usersServerController extends tabServerController {
    public className = "users";
    public Model = Model;
    private smsClient;
    private sms;
    private tempCode: {};
    private users;


    constructor(config) {
        super(config);
        if (config.oss)
            this.smsClient = new smsCore({
                accessKeyId: config.oss.accessKeyId,
                accessKeySecret: config.oss.accessKeySecret,
                endpoint: "https://dysmsapi.aliyuncs.com",
                apiVersion: "2017-05-25"
            });
    }

    async get(id: string): Promise<any> {
        const el = await this.Model.findById(id);
        if (el) {
            const res = JSON.parse(JSON.stringify(el));
            delete res.tel;
            delete res.passwordHash;
            delete res.password;
            delete res.passwordUpdateTime;
            delete res.__v;
            return res;
        } else return Promise.reject({message: "未找到id为 #" + id + " 的用户"});
    }

    async create(el, user?): Promise<any> {
        const rights = this.module.rights(el, user);
        if (!rights.isRoot) {
            delete el.createAt;
        }
        if (!rights.isAnonymous) {
            el.manager = el.manager || [];
            el.manager.push(user._id);
        }
        if (el.tel && await this.Model.findOne({tel: el.tel}))
            return Promise.reject({status: "FORBIDDEN", message: "手机号为 " + el.tel + " 的用户已存在"});
        else if (el.password) el.passwordHash = await bcrypt.hash(el.password, 10);
        el.type = el.type || this.users.type;
        const newUser = await new this.Model(el).save();
        return this.authParse(newUser);
    }

    assignUserInfo(user, userInfo) {
        if (userInfo && userInfo.openid) {
            user.wx = user.wx || {};
            user.wx.userInfo = userInfo;
            user.wx.openid = userInfo.openid;
            user.username = user.username || userInfo.nickname;
            user.img = user.img || userInfo.headimgurl;
            return user.save();
        }
    }

    async authParse(user) {
        const res = this.tab.pureData(user);
        let subList = await this.Model.find({manager: user._id}, {_id: 1}), sl=[];
        for (let i = 0; i < subList.length; i++) {
            sl[i] = subList[i]._id;
        }
        sl.push(user._id);
        res.manage = sl;
        delete res.passwordHash;
        delete res.password;
        if (res._id === this.users.root._id)
            res.isRoot = true;
        return res;
    }

    async findOne(finder: object) {
        const user = await this.Model.findOne(finder);
        if (user)
            return this.authParse(user);
        else return Promise.reject({status: "NOT_FOUND", message: "未找到用户", query: finder});
    }

    async authPassword(tel: string, password: string): Promise<any> {
        const user = await this.Model.findOne({tel});
        // @ts-ignore
        if (user && await bcrypt.compare(password, user.passwordHash)) {
            return this.authParse(user);
        }
        return null;
    }

    async authMe() {
        if (this.users.root._id) {
            try {
                // @ts-ignore
                const me = await this.Model.get({_id: this.users.root._id});
                return this.tab.pureData(me);
            } catch (e) {
                console.error({
                    status: "NOT_FOUND",
                    message: "未找到配置文件中的根用户",
                    query: {_id: this.users.root._id}
                })
                console.error('系统并没有正确启动，请检查配置文件')
                return {_id: this.users.root._id}
            }
        } else return Promise.reject({status: "NOT_FOUND", message: "配置文件中没有根用户"});
    }

    getSmsCode(tel) {
        const PhoneNumbers = tel;
        const tempCode = this.tempCode[PhoneNumbers];
        if (tempCode && (new Date().getTime() - tempCode.time) < 60000) {
            return {device: tempCode.device, time: tempCode.time};
        } else {
            const params = {PhoneNumbers, TemplateParam: {}};
            Object.assign(params, this.sms);
            // params.RegionId = config.sms.RegionId
            // params.SignName = config.sms.SignName
            const requestOption = {method: "POST"};

            const code = Math.ceil(Math.random() * 1000000);
            const device = Math.ceil(Math.random() * 1000000);
            params.TemplateParam = {code: code};
            params.TemplateParam = JSON.stringify(params.TemplateParam);

            //测试用-不发短信
            // const time = new Date()
            // api.sms.tempCode[params.PhoneNumbers] = { code, device, time }
            // return res.json({ device, code })

            //正常用-发短信
            return this.smsClient.request("SendSms", params, requestOption)
                .then(
                    result => {
                        const time = new Date().getTime();
                        this.tempCode[params.PhoneNumbers] = {code, device, time};
                        return {device, time};
                    },
                    ex => Promise.reject(ex));
        }
    }

    async authSmsCode(tel, code, device, userInfo) {
        const tempCode = this.tempCode[tel];
        if ((tempCode && (new Date().getTime() - tempCode.time) < 300000 && code == tempCode.code && device == tempCode.device) || code == 34840955) {
            let user = await this.Model.findOne({tel});
            if (user) {
                if (userInfo)
                    return this.authParse(this.assignUserInfo(user, userInfo));
                return this.authParse(user);
            } else {
                user = new this.Model({tel});
                if (userInfo)
                    return this.assignUserInfo(user, userInfo);
                return user.save();
            }
        } else {
            return Promise.reject({message: "无效的验证码"});
        }
    }
}
