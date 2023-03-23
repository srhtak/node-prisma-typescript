import express from 'express';
import router from './router';
import morgan from 'morgan';
import cors from 'cors';
import {protect} from './modules/auth';
import { createNewUser,signin } from "./handlers/user";

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res) => {
    throw new Error('test serhat') // Express will catch this on its own.
});


app.use('/api',protect, router);
app.post('/user',createNewUser);
app.post('/signin',signin);

app.use((err, req, res, next) => {

    console.log(err);
    res.status(500).json({message:err.message})

})



export default app;