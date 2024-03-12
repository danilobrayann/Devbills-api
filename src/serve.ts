import express, { json } from 'express';

const app = express();

app.use(json());
app.listen(3333, () => console.log('🚀👩‍🚀 rodando na porta 3333'));
