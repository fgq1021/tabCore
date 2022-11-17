import { Schema } from "mongoose";
import { TabUnitModel } from "../core/tab.server.model";
var ObjectId = Schema.Types.ObjectId;
export default TabUnitModel('Type', {
    name: String,
    ChineseName: String,
    title: String,
    note: String,
    owner: { type: ObjectId, ref: "User" },
    dataStructure: [],
    fns: [{ type: ObjectId, ref: "Fn" }],
    type: { type: ObjectId, ref: "Type" },
    data: {},
    parents: [String],
    children: {},
});
