import * as mongoose from "mongoose";

const bcrypt = require("bcrypt");

const ObjectId = mongoose.Schema.Types.ObjectId;

const UserSchema = new mongoose.Schema({
  username: String,
  img: String,
  manager: [{ type: ObjectId, ref: "User" }],
  parents: [String],
  children: {},
  type: { type: ObjectId, ref: "Type" },
  data: {},
  wx: {
    openid: String,
    unionid: String,
    userInfo: {}
  },
  tel: {
    unique: true,
    type: String
  },
  // password: String,
  passwordHash: String,
  passwordUpdateTime: {
    type: Date,
    default: Date.now
  },
  catalogUpdateTime: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });


UserSchema.statics = {
  async create(user): Promise<any> {
    if (user.tel && await this.findOne({ tel: user.tel })) return null;
    else if (user.password) user.passwordHash = await bcrypt.hash(user.password, 10);
    return new this(user).save();
  },
  async authPassword(tel: string, password: string): Promise<any> {
    const user = await this.findOne({ tel });
    if (user && await bcrypt.compare(password, user.passwordHash)) return user;
    return null;
  }
};

const User = mongoose.model("User", UserSchema);

export default User;
