// API - Application Programing Interface
import express from "express";
import cors from "cors";
import { db } from "./connect.js";
import path from "path";

const __dirname = path.resolve();

const app = express();
const PORT = 3001;

// Middlewares
app.use(cors());
// app.use(express.json());

// Endpoints:
app.get('/api/', (resquest, response) => {
    response.send('Só vamos trabalhar com os endpoints "/artists" e "/songs');
});

app.get('/api/artists', async (resquest, response) => {
    response.send(await db.collection('artists').find({}).toArray());
});

app.get('/api/songs', async (resquest, response) => {
    response.send(await db.collection('songs').find({}).toArray());
});

// Middleware para arquivos estáticos (js, css, imagens)
app.use(express.static(path.join(__dirname, '../front-end/dist')));

// Middleware para rotas React SPA
//Só responda com index.html se a rota não começar com /api ou /assets
app.get(/^\/(?!api|assets).*/, async (request, response) => {
    response.sendFile(path.join(__dirname, '../front-end/dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor esá escutando na porta ${PORT}`);
});


