//require library
const mongoose = require('mongoose');

//connecting to db and creation of db
mongoose.connect('mongodb://localhost/toDo_db');

//checking connection
const db = mongoose.connection;

//checking error or 
db.on('error',console.error.bind(console,'Error connecting to db'));

//successful connection setup
db.once('open',function(){
    console.log('Successfully connected to db');
});
