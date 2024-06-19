import mongoose from "mongoose";

const connectUserDB = async () => {
  try {
    const uri =
      process.env.MONGODB_URI ||
      "mongodb+srv://bruno35418:indaiacult@2024@indaiacult.hdajmzg.mongodb.net/Indaiacult";
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`Erro no userDB: ${error.message}`);
    process.exit(1);
  }
};

export default connectUserDB;
