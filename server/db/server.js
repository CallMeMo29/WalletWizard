import mongoose from "mongoose";

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI, {
      });
      console.log(`MongoDB connected:${conn.connection.name}`);
    } catch (error) {
      console.error(error);
    }
  };

  connectDB();