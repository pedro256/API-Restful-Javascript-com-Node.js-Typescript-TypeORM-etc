import productsRouter from '@modules/Products/routes/products.routes';
import {Router} from 'express';

const routes = Router();

routes.use('/products',productsRouter);

routes.get("/",(request,response)=>{
    return response.json({Alive:"Y"})
})


export default routes;
