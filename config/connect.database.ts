import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL as string);
  } catch (error) {
    console.log(error);
  }
};

export default ConnectDB;
