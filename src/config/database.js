const mongoose = require('mongoose');

const uri = 'mongodb://localhost/millionTesouroDireto';

mongoose.connect(uri,  { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;