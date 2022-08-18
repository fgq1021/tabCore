import * as mongoose from "mongoose";

const ObjectId = mongoose.Schema.Types.ObjectId;

const SystemSchema = new mongoose.Schema({
  title: String,
  parents: [String],
  children: {},
  type: { type: ObjectId, ref: "Type" },
  data: {}
}, { timestamps: true });

SystemSchema.statics = {};

export default mongoose.model("System", SystemSchema);
