import mongoose from "mongoose";

mongoose.set('strictQuery', true);

const url =
  "mongodb+srv://vagner:knedlik110507@nodejs.nvyouy8.mongodb.net/?retryWrites=true&w=majority";

export async function main() {
  await mongoose.connect(url);
}
