const mongoose = require('../config/mongoose');
const ToDo = require('../models/taskSchema');

module.exports.create = function(req,res){
     

    // populating the db -- task added to db cretiong unique id for very task added
    ToDo.create({
        description:req.body.description,
        date:req.body.date
    },function(err,newTask){
        if(err){
            console.log('Error creating task');
            return;
        }
        console.log('Task created successfully ',newTask); 
       
        // to see the added task on home browser page 
        // toDo.push(req.body);
        
        return res.redirect('back');
    });

}