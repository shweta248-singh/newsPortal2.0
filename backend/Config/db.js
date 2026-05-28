import mongoose from "mongoose"

export const dbConnect = async () => {
  const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/NewsPortal';
  const localMongoUri = process.env.LOCAL_MONGO_URI || 'mongodb://localhost:27017/NewsPortal';

  try {
    const conn = await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 10000
    })
    if (conn) {

      console.log("DB Connected Successfully.........");

    }
  } catch (error) {
    const canUseLocalFallback = process.env.NODE_ENV !== 'production' && mongoUri !== localMongoUri;
    if (!canUseLocalFallback) {
      throw error;
    }

    console.warn("Primary MongoDB connection failed. Trying local MongoDB...");
    const conn = await mongoose.connect(localMongoUri, {
      serverSelectionTimeoutMS: 10000
    });
    if (conn) {
      console.log("Local DB Connected Successfully.........");
    }
  }
}
