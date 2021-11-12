const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const loginRegister = new Schema({
    fullname: { type: String },
    email: { type: String },
    username: { type: String},
    password: { type: String },
    password2: { type: String },
    image: { type: String },
    infoUser: {type: String, slug: 'email', unique: true }
}, {
    timestamps: true,
});

module.exports = mongoose.model('loginRegister', loginRegister);
