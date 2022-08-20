require('dotenv').config()

const express=require('express');

const app= express();

const morgan=require('morgan');

const port=process.env.PORT || 3000

const bodyparser=require("body-parser");

const path=require('path');

const connectDB= require('./server/database/index')

//dotenv.config({path:'config.env'})

//log request
app.use(morgan('tiny'))

connectDB();
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set("view engine","ejs")

//app.set("views",path.resolve(__dirname,"views/ejs"))

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

app.use('/',require('./server/routes/routes'))

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
  })

