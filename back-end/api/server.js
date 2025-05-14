// API - Application Programing Interface

import express from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();
const PORT = 3001;

// Middlewares
app.use(cors());
// app.use(express.json());

// Endpoints:
app.get('/', (resquest, response) => {
    response.send('Só vamos trabalhar com os endpoints "/artists" e "/songs');
})

app.get('/artists', async (resquest, response) => {
    response.send(await db.collection('artists').find({}).toArray());
})

app.get('/songs', async (resquest, response) => {
    response.send(await db.collection('songs').find({}).toArray());
})


app.listen(PORT, () => {
    console.log(`Servidor esá escutando na porta ${PORT}`);
});


