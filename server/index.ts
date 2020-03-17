import path from 'path';
import express from 'express';
import compression from 'compression';
import morgan from 'morgan';
import favicon from 'serve-favicon';

import { IndexRouter } from './routers/IndexRouter';
import { ApiRouter } from './routers/ApiRouter';
import { NotFoundRouter } from './routers/NotFoundRouter';

import { config } from "./config";
import { errorHandler } from "./controller/error/ErrorHandler";

const app = express();

// Support Gzip
app.use(compression());

// Support post requests with body data (doesn't support multipart, use multer)
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Setup logger
app.use(morgan('combined'));

// Index
app.use('/', IndexRouter());

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use(favicon(path.resolve(__dirname, '..', 'build', "favicon.ico")));

// APIs
app.use('/api', ApiRouter());

// Not Found
app.use(NotFoundRouter());

// Error
app.use(errorHandler);

// Listen
app.listen(config.server.port, () => {
    console.log(`App listening on port ${config.server.port}!`)
});

// Process error
app.on('error', (error) => {
    if (error.syscall !== 'listen') {
        throw error;
    }

    let bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
});
