import express from 'express';

import { universalLoader } from '../render';

export function IndexRouter() {

    const router = express.Router();

    router.get('/', universalLoader);

    return router;
}
