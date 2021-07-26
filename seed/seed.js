const mongoose = require('mongoose');
const axios = require('axios').default;
const bookModel=require('../models/bookModel');

let books=[];
let booksByDan=[];
//axios.get('https://openlibrary.org/authors/OL1433493A/works.json')
axios.get('http://openlibrary.org/search.json?author=dan+abnett')
    .then((response)=>{
        let bookEntries=response.data.docs;
        
        bookEntries.forEach(book => {
            if (book.author_key.includes('OL1433493A'))
            {
                let bookByDan={};
                bookByDan.title=book.title;
                if (book.cover_i){
                    bookByDan.cover=`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
                }
                else{
                    bookByDan.cover=`https://www.bloxhammill.com/wp-content/uploads/2019/12/DUMMY-E-BOOK-CoVER-scaled.png`;
                }
                bookByDan.year=book.first_publish_year;
                bookByDan.description="haha";
                booksByDan.push(bookByDan);

            }               
        });
      
        console.log("got the data");
        console.log(`The length of the array is ${booksByDan.length}`);

        mongoose.connect('mongodb://localhost:27017/DanBooks', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
            .then(()=>{
                console.log('Connected to db')
                bookModel.create(booksByDan)
                    .then(()=>{console.log("Succesfully Injected")})
                    .catch((error)=>{console.log(error);})
            }
                
            )
            .catch((error)=>{console.log(error)});

        ;})
    .catch((error)=>{console.log(error);});


