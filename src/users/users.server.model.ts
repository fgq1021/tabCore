import {Schema} from "mongoose";
import {TabUnitModel} from "../core/tab.server.model";

const bcrypt = require("bcrypt");
const ObjectId = Schema.Types.ObjectId;

export default TabUnitModel('User',
    {
        username: String,
        img: String,
        manager: [{type: ObjectId, ref: "User"}],
        wx: {
            openid: String,
            unionid: String,
            userInfo: {}
        },
        tel: {
            unique: true,
            type: String
        },
        passwordHash: String,
        passwordUpdateTime: {
            type: Date,
            default: Date.now
        },
        catalogUpdateTime: {
            type: Date,
            default: Date.now
        }
    },
    {
        async create(user): Promise<any> {
            if (user.tel && await this.findOne({tel: user.tel})) return null;
            else if (user.password) user.passwordHash = await bcrypt.hash(user.password, 10);
            return new this(user).save();
        },
        async authPassword(tel: string, password: string): Promise<any> {
            const user = await this.findOne({tel});
            if (user && await bcrypt.compare(password, user.passwordHash)) return user;
            return null;
        }
    })
