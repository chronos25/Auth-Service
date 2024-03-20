const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {type: String },
    lastName: {type: String },
    phone: {type: String },
    email: {type: String, unique : true, required : true },
    password: {type: String, required : true}
},{
  timestamps: true
});

const user = mongoose.model('user', userSchema);

module.exports = user;