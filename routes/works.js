
const express=require('express');
const router=express.Router();
const mongoose = require('mongoose');
const bookModel= require('../models/bookModel');

router.get("/works", (req, res,next) =>{
    bookModel.find()
        .then((books)=>{
            res.render('works.hbs',{        
                css: ["works.css"],
                books,
            });
        })
        .catch((error)=>{error})
    
});

module.exports=router;


