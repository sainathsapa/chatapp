import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const ConnectDB = async () => {
  try {
    const DBInstance = await mongoose.connect('mongodb+srv://infodjsai:7XA5lU86kgUYR96i@chatapp.ibpcg5n.mongodb.net');

    console.log("DataBase is Connected", DBInstance.connection.host);
  } catch (error) {
    throw new Error(error);
  }
};

export default ConnectDB;
