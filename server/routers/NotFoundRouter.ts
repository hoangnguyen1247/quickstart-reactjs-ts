import express, { Request, Response, NextFunction } from 'express';

import { universalLoader } from '../render';

export function NotFoundRouter() {

    const router = express.Router();

    router.get('/*', universalLoader);

    return router;
}
