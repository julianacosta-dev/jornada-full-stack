import { MongoClient } from "mongodb";
import dotenv from "dotenv";

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

const URI = process.env.MONGODB_URI_ENV;

if(!URI) {
    throw new Error("MONGODB_URI_ENV não definida nas variáveis de ambiente");
}

const client = new MongoClient(URI);

client ? console.log("Conexão bem sucedida."): console.log("Conexão não realizada!");

export const db = client.db("spotifyCopy");
