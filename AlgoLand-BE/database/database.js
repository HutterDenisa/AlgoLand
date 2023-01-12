const mongoose = require('mongoose');
const db       = mongoose.connection;

mongoose.connect("mongodb://127.0.0.1:27017",
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
db.on('error', console.error.bind(console, 'connection error:'));

module.exports = db
