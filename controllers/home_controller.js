const ToDo = require('../models/taskSchema');
module.exports.home = function(req,res){

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
}