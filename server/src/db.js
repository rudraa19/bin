import mongoose, { model, Schema } from "mongoose";

mongoose.connect(process.env.MONGO_URL);

const binSchema = new Schema({
  key: { type: String, unique: true },
  title: String,
  data: String,
  expiresAt: { type: Date, required: true },
});

binSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export const BinModel = new model("user", binSchema);
