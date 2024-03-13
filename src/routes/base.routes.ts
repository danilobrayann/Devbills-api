import { Router } from 'express';

import PackJson from '../../package.json';

export const baseRouter = Router();

baseRouter.get('/', (_, res) => {
  const {name, version, description, author} = PackJson;
  res.status(200).json({name, version, description, author})
});
