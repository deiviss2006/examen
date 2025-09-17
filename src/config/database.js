import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // desde mongoose v6 ya no necesitas useNewUrlParser ni useUnifiedTopology
    });
    console.log(`MongoDB conectado: ${conn.connection.host}`);
  } catch (error) {
    console.error("Error de conexión:", error);
    process.exit(1);
  }
};

export default connectDB;
