const mongoose = require('mongoose');

/**
 * You database
 */
const URI = 'mongodb://127.0.0.1:27017/reviews'

mongoose.connect(URI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Mongo is connected!');
});

module.exports = db;