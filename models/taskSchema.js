const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    date: {
        type:String,
        required:true
    }

});

const ToDo = mongoose.model('ToDo',toDoSchema);

module.exports = ToDo;