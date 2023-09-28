/* import {Sequelize} from 'sequelize';

import dotenv from 'dotenv';

// Cargamos las variables de entorno de .env.local
dotenv.config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD,  {
  host: DB_HOST, // Cambia esto si tu base de datos está en otro servidor
  dialect: 'postgres', // Puedes cambiar esto si estás utilizando otra base de datos
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente.');
  })
  .catch((err) => {
    console.error('Error al conectar a la base de datos:', err);
  });

  export default sequelize; */
  import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const conn = {
    isConnected: false
};

const passwordMongo = process.env.PASSWORD_MONGO;
const userMongo = process.env.USER_MONGO;
const mongoCluster = process.env.MONGO_CLUSTER;
export async function connectDB() {
    if (conn.isConnected) return;
//mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&w=majority
const db = await mongoose.connect(`mongodb+srv://${userMongo}:${passwordMongo}@${mongoCluster}/`);
    const dbName = mongoose.connection.name;
    console.log(`Conectado a la base de datos: ${dbName}`);
    conn.isConnected = db.connections[0].readyState;
}

mongoose.connection.on("connected", () => {
    console.log("Mongoose está conectado");
});

mongoose.connection.on("error", (err) => {
    console.error("Error al conectar con Mongoose:", err);
});
