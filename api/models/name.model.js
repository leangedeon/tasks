var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var nameSchema = new Schema({
    '_id': {type:Schema.Types.ObjectId},
    'name': {type:String, required:true}
});

module.exports = mongoose.model('Name', nameSchema);