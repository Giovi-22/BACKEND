import { Router } from "express";

const pRouter = Router();

pRouter.get('/','controlador');
pRouter.get('/:pid','controlador');
pRouter.post('/','controlador');
pRouter.put('/:pid','controlador');
pRouter.delete('/:pid','controlador');

export default pRouter;