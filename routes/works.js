
const express=require('express');
const router=express.Router();

const books = require('../main')

router.get("/works", (req, res,next) =>{
    res.render('works.hbs',{        
        css: ["works.css"],
        books,
    });
});

module.exports=router;