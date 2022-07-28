import express, { Request, Response, ErrorRequestHandler } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import { MulterError } from 'multer';

import apiRoutes from './router';

dotenv.config();

const server = express();

server.use(cors());

server.use(express.static(path.join(__dirname, '..', 'public')));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(morgan('dev'));

server.use(apiRoutes);

server.use((req: Request, res: Response) => {
    res.status(404).json({ error: 'Endpoint não encontrado.' });
});

// Lidando com erros de upload
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    res.status(400);
    if (err instanceof MulterError) {
        res.json({ error: err.code });
    } else {
        console.log(err);
        res.status(400).json({ error: 'Ocorreu algum erro.' });
    }
};
server.use(errorHandler);

server.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);

});