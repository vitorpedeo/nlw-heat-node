import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

import { router } from './routes';

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

const serverHttp = http.createServer(app);
const io = new Server(serverHttp, {
  cors: {
    origin: '*',
  },
});

io.on('connection', socket => {
  console.log(`Usuário ${socket.id} conectado no socket`);
});

export { serverHttp, io };
