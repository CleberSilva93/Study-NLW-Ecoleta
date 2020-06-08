import express from 'express';
import path from 'path';
import routes from './routes'; // importa as routas dentro do routes.
import cors from 'cors';
import { errors } from 'celebrate'

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes); // adicionar as routas dentro do app

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads'))); // arquivos que são acessados de forma direta

app.use(errors())

app.listen(3333);