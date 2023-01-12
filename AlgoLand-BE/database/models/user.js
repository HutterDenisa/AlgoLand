const mongoose = require('mongoose')

const User = mongoose.model('User',
{
    email:        String,
    username:     String,
    password:     String,
    notebook:     Array,
});

module.exports = User
