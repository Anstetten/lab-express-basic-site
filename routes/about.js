const express=require('express');
const router=express.Router();

router.get("/about", (req, res,next) =>{
    res.render('about.hbs',{
        css: ["about.css"]
    });
});

module.exports=router;