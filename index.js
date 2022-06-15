//require express
const express = require('express');

const path = require('path');

//port on server running
const port = 3000;


//db connection
const db = require('./config/mongoose');
const ToDo = require('./models/taskSchema');

//firing up express
const app = express();





//template engine - ejs
app.set('view engine','ejs');
app.set('views','./views');


//middleware
app.use(express.urlencoded({extended:true}));
// app.use(express.json);
app.use(express.static('assets'));

//route created for all paths seperately
app.use('/',require('./routes'));

// var toDo =[];


// app.post('/create-task',function(req,res){
     

//     // populating the db -- task added to db cretiong unique id for very task added
//     ToDo.create({
//         description:req.body.description,
//         date:req.body.date
//     },function(err,newTask){
//         if(err){
//             console.log('Error creating task');
//             return;
//         }
//         console.log('Task created successfully ',newTask); 
       
//         // to see the added task on home browser page 
//         toDo.push(req.body);
        
//         return res.redirect('back');
//     });

// });


//server running or error
app.listen(port,function(err){
    if(err){
        console.log(`Error running on server : ${err}`);
    }
    console.log(`Server Running successfully on port : ${port}`);
});