import { MongoClient } from "mongodb";

const URI = "mongodb+srv://julianacosta:87loL25pjxAwwayq@cluster0.ffaijv0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

client ? console.log("Conexão bem sucedida."): console.log("Conexão não realizada!");

export const db = client.db("spotifyCopy");
