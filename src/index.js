import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import passport from 'passport';

import connect from './config/database.js';
import {passportAuth} from './middlewares/jwt-middleware.js'
import apiRoutes from './routes/index.js'



const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

app.use(passport.initialize())
passportAuth(passport);

app.use('/api', apiRoutes);

app.listen(PORT, async ()=> {
    console.log(`server started at ${PORT}`);
    connect();
    console.log('mongo DB connected');

})
