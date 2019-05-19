const express = require('express');
const appRoutes = require('./routes/app-route');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



app.use(appRoutes);



app.listen('3000', ()=>{
    console.log('server working');
});