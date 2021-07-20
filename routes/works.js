const express=require('express');
const router=express.Router();

router.get("/works", (req, res,next) =>{
    res.render('works.hbs',{
        css: ["works.css"]
    });
});

module.exports=router;