import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { itemsRouter } from './app/items/items.router';

const app = express();
app.use(express.static(__dirname + '/public'));

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use('/api/items', itemsRouter);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
