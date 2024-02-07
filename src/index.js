import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import connect from './config/database.js';

import apiRoutes from './routes/index.js'



const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

app.use('/api', apiRoutes);

app.listen(PORT, async ()=> {
    console.log(`server started at ${PORT}`);
    connect();
    console.log('mongo DB connected');

})
