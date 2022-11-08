import {Schema} from "mongoose";
import {TabUnitModel} from "../core/tab.server.model";

const ObjectId = Schema.Types.ObjectId;

export default TabUnitModel('Element',
    {
        title: String,
        owner: {type: ObjectId, ref: "User"},
        //accessControl:{[userid]:'rw'}
        accessControl: {},
        //废弃parents:['id-place-key']
        //parents:['id.place.key']
        parents: [String],
        //废弃children:{[place.key]:['unit-id']/'unit-id'}
        //children:{[place.key]:['unit.id']}
        children: {},
        type: {type: ObjectId, ref: "Type"},
        data: {},
        cover: {type: ObjectId, ref: "Type"},
        coverData: {},
        app: {type: ObjectId, ref: "Type"},
        appData: {},
        goods: {type: ObjectId, ref: "Type"},
        goodsData: {},
        isHide: {
            type: Boolean,
            default: false
        },
        meta: {
            readTimes: Number,
            like: Number
        }
    }
)
