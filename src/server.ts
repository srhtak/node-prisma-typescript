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
    res.status(200);
    res.json({message: 'Hello World'});
});


app.use('/api',protect, router);
app.post('/user',createNewUser);
app.post('/signin',signin);



export default app;