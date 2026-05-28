import mongoose from "mongoose"
export const dbConnect = async () => {
  const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/NewsPortal';
  const conn = await mongoose.connect(mongoUri)
  if (conn) {

    console.log("DB Connected Successfully.........");

  }
}
