import mongoose from "mongoose";

export async function connect() {
  const conn = await mongoose.connect("mongodb://root:example@mongo:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
