import {Router,Request,Response} from 'express';



const router = Router();

// Products routes

router.get('/product',  (req:Request,res:Response)=>{
    res.json({message: 'serhat test'});
});
router.get('/product/:id',  ()=>{});
router.put('/product/:id',  ()=>{});
router.post('/product',  ()=>{});
router.delete('/product/:id',  ()=>{});


//Update routes

router.get('/update',  (res)=>{
    res.status(200);
    res.json({message: 'Hello World'});
});
router.get('/update/:id',  ()=>{});
router.put('/update/:id',  ()=>{});
router.post('/update',  ()=>{});
router.delete('/update/:id',  ()=>{});


//Update Points routes

router.get('/updatePoints',  ()=>{});
router.get('/updatePoints/:id',  ()=>{});
router.put('/updatePoints/:id',  ()=>{});
router.post('/updatePoints',  ()=>{});
router.delete('/updatePoints/:id',  ()=>{});



export default router;
