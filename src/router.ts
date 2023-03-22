import {Router,Request,Response} from 'express';
import { body } from 'express-validator';
import { createUpdate, deleteUpdate, getOneUpdate, getUpdates, updateUpdate } from './handlers/update';
import { createProduct, deleteProduct, getOneProduct, getProducts, updateProduct } from './handlers/product';
import { handleInputErrors } from "./modules/middleware";



const router = Router();

// Products routes

router.get('/product', getProducts);

router.post('/product',body('name').isString(),handleInputErrors, createProduct);

router.put('/product/:id', body('name').isString(),handleInputErrors, updateProduct);

router.get('/product/:id',getOneProduct);

router.delete('/product/:id', deleteProduct);


//Update routes

router.get('/update', getUpdates);

router.post('/update',
body('title').exists().isString(),
body('body').exists().isString(),
body('productId').exists().isString(),
createUpdate);

router.put('/update/:id',
body('title').optional(),
body('body').optional(),
body('status').isIn(['IN_PROGRESS','LIVE','DEPRECATED','ARCHIVED']),
body('version').optional(),
updateUpdate);

router.get('/update/:id',  getOneUpdate);

router.delete('/update/:id',  deleteUpdate);


//Update Points routes

router.get('/updatePoints', ()=>{});

router.post('/updatePoints',
body('name').optional().isString(),
body('description').optional().isString(),
body('updateId').exists().isString(), ()=>{});

router.put('/updatePoints/:id',
body('name').optional().isString(),
body('description').optional().isString(),
()=>{});

router.get('/updatePoints/:id',  ()=>{});

router.delete('/updatePoints/:id',  ()=>{});

//User routes





export default router;
