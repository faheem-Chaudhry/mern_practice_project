const mongoose = require('mongoose');

const {schema} = mongoose;

const blogSchema = new Schema({
    title: {type: String, require: true},
    content: {type: String, require: true},
    photoPath: {type: String, require: true},
    auther: {type: mongoose.SchemaType.ObjectID, ref: 'users'}
},
{timestamps: true}
);
module.exports = mongoose.model('blogs',blogSchema, 'blogs');