import mongoose from "mongoose"
export const dbConnect = async () => {
  const conn = await mongoose.connect('mongodb://localhost:27017/NewsPortal')
  if (conn) {

    console.log("DB Connected Successfully.........");

  }
}