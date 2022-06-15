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

//route created for all paths seperately
app.use('/',require('./routes'));


//template engine - ejs
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//middleware
app.use(express.urlencoded());
app.use(express.static('assets'));

//making to do list always show like this when we restart server on browser
var toDo = [
    
    // {
    //     description:"Today complete project",
    //     date:"14 june 2022"
    // },
    // {
    //     description:"REvise and complete next steps of learnign quickly",
    //     date:"15 june 2022"
    // }
]

// //home page to add task and show in browser the task added - it will be added to db also
// app.get('/',function(req,res){
//     // res.send("hello home");

//     ToDo.find({},function(err,toDo){
//         if(err){
//             console.log('Error in finding tasks added to db');
//             return;
//         }
//         return res.render('home',{
//             title:"To Do App",
//             toDo_List : toDo
//         });
//     });

    
// });

//find and fetch all tasks from db
app.get('/find',function(req,res){
    // res.send("hello home");

    ToDo.find({},function(err,toDo){
        if(err){
            console.log('Error in finding tasks added to db');
            return;
        }
        return res.render('home',{
            title:"To Do App",
            toDo_List : toDo
        });
    });

    
});

// find task by id

// app.get('/find/:id',function(req,res){
//     // res.send("hello home");
//     let id = req.body.id;
//     ToDo.findById(id,function(err,toDo){
//         if(err){
//             console.log('Error in finding tasks added to db');
//             return;
//         }
//         return res.render('home',{
//             title:"To Do App",
//             toDo_List : toDo
//         });
//     });

    
// });

// app.post('/create-task',function(req,res){
//     //to test the route
//     // res.send("Task added successfully");
//     // // console.log("working adding task module");
//     // console.log(req.body);

//     // toDo.push({
//     //     description:req.body.description,
//     //     date:req.body.date
//     // });

    

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

//     // return res.redirect('back');
// });

//for deleting task by unique id from mongodb
// app.get('/delete-task',function(req,res){
//     // console.log(req.params);
//     let id = req.query.id;

//     ToDo.findByIdAndDelete(id,function(err,newTask){
//         if(err){
//             console.log('Error in deleting task');
//             return;
//         }
//         console.log('task deleted successfully from db',newTask);
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