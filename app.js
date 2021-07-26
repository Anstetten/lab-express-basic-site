const express= require("express");
const hbs= require("hbs");
const _PORT=5000;
const app=express();
const mongoose = require('mongoose');


//Register partials 
hbs.registerPartials(__dirname+"/views/partials");

//Register static files
app.use(express.static(__dirname+"/public"));


//Set routes
const homeRouter= require('./routes/home');
const aboutRouter= require('./routes/about');
const worksRouter= require('./routes/works');


//Use routes
app.use(homeRouter);
app.use(aboutRouter);
app.use(worksRouter);

mongoose
  .connect("mongodb://localhost:27017/DanBooks", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

app.listen(_PORT,()=>{console.log(`Listening to: http://localhost:${_PORT}`);});