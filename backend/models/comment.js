const mongoose = require('mongoose');

const {schema} = mongoose;

const commentSchema = new Schema({
    content: {type: String, require: true},
    blog: {type: mongoose.SchemaType.ObjectID, ref: 'blogs'},
    auther: {type: mongoose.SchemaType.ObjectID, ref: 'users'}
 
},
{timestamps: true}
);
module.exports = mongoose.model('comment',commentSchema, 'comments');