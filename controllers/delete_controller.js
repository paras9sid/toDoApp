const ToDo = require('../models/taskSchema');

module.exports.delete = function(req,res){
    // console.log(req.params);
    let id = req.query.id;

    ToDo.findByIdAndDelete(id,function(err,newTask){
        if(err){
            console.log('Error in deleting task');
            return;
        }
        console.log('task deleted successfully from db',newTask);
        return res.redirect('back');
    });
}