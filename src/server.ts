import express from 'express';
import router from './router';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.status(200);
    res.json({message: 'Hello World'});
});


app.use('/api', router);



export default app;