import * as mongoose from "mongoose";

const ObjectId = mongoose.Schema.Types.ObjectId;

const TypeSchema = new mongoose.Schema({
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
}, { timestamps: true });

TypeSchema.statics = {};

export default mongoose.model("Type", TypeSchema);
