import * as mongoose from "mongoose";

const ObjectId = mongoose.Schema.Types.ObjectId;

const tabUnitSchema = {
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
    isHide: {
        type: Boolean,
        default: false
    }
}

const tabUnitStatics = {
    async get(finder) {
        const unit = await this.findOne(finder)
        if (unit)
            return unit
        return Promise.reject({
            status: "NOT_FOUND",
            message: "未找到该单元",
            query: finder
        })
    }
}

export function TabUnitModel(unitName: string, unitSchema = {}, unitStatics = {}) {
    const schema = {}, statics = {}
    Object.assign(schema, tabUnitSchema, unitSchema)
    Object.assign(statics, tabUnitStatics, unitStatics)

    const UnitSchema = new mongoose.Schema(schema, {timestamps: true});
    UnitSchema.statics = statics;
    return mongoose.model(unitName, UnitSchema)
}
