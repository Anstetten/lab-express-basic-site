const express= require("express");
const hbs= require("hbs");
const _PORT=5000;
const app=express();

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

app.listen(_PORT,()=>{console.log('i am set up')});