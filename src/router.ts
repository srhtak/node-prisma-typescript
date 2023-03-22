import {Router,Request,Response} from 'express';
import { body, oneOf } from 'express-validator';
import { createProduct, deleteProduct, getOneProduct, getProducts, updateProduct } from './handlers/product';
import { handleInputErrors } from "./modules/middleware";



const router = Router();

// Products routes

router.get('/product', getProducts);
router.get('/product/:id',getOneProduct);
router.put('/product/:id', body('name').isString(),handleInputErrors, updateProduct);
router.post('/product',body('name').isString(),handleInputErrors, createProduct);
router.delete('/product/:id', deleteProduct);


//Update routes

router.get('/update',  (res)=>{
    res.status(200);
    res.json({message: 'Hello World'});
});
router.get('/update/:id',  ()=>{});
router.put('/update/:id',
body('title').optional(),
body('body').optional(),
body('status').isIn(['IN_PROGRESS','SHIPPED','DEPRECATED']),
body('version').optional(),
()=>{

});
router.post('/update',
body('title').exists().isString(),
body('body').exists().isString(),
()=>{});
router.delete('/update/:id',  ()=>{});


//Update Points routes

router.get('/updatePoints',  ()=>{});
router.get('/updatePoints/:id',  ()=>{});
router.put('/updatePoints/:id',
body('name').optional().isString(),
body('description').optional().isString(),
()=>{});
router.post('/updatePoints',
body('name').optional().isString(),
body('description').optional().isString(),
body('updateId').exists().isString(),
()=>{});
router.delete('/updatePoints/:id',  ()=>{});

//User routes





export default router;
