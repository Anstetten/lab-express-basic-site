const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const bookSchema=new Schema({
    title:String,
    cover:String,
    year: String,
    description: String,
});

const bookModel = mongoose.model('book',bookSchema);

module.exports = bookModel;