var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var taskSchema = new Schema({
    '_id': {type:Schema.Types.ObjectId},
    'task_id': {type:String, required:true},
    'name': {type:String, required:true},
    'status': {type:Boolean, default: false}

});

module.exports = mongoose.model('Task', taskSchema);