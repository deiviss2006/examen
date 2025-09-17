import mongoose from "mongoose";

/**
 * Establece la conexión con la base de datos MongoDB.
 *
 * Esta función utiliza Mongoose como ODM (Object Data Modeling)
 * para conectar la aplicación a MongoDB. Se ejecuta de manera asíncrona
 * y maneja tanto la conexión exitosa como los posibles errores.
 *
 * @async
 * @function connectDB
 * @returns {Promise<void>} Una promesa que se resuelve cuando la conexión
 * se establece correctamente. Si falla, el proceso se finaliza.
 *
 * @example
 * import connectDB from "./infrastructure/database.js";
 *
 * // Iniciar la conexión a MongoDB
 * connectDB()
 *   .then(() => console.log("Conexión lista para usarse"))
 *   .catch(() => console.error("No se pudo conectar a la base de datos"));
 */
const connectDB = async () => {
  try {
  const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/examen";
  await mongoose.connect(uri, {
      useNewUrlParser: true,       // Usa el nuevo parser de URL
      useUnifiedTopology: true     // Usa el nuevo motor de gestión de conexiones
    });
    console.log("Conectado a MongoDB");
  } catch (err) {
    console.error("Error de conexión:", err);
    process.exit(1); // Finaliza la ejecución si falla la conexión
  }
};

export default connectDB;
