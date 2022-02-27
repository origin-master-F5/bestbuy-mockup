const mongoose = require('mongoose');

var Schema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    image: {
        type: String
    },
    console: {
        type: String
    },
    rating: {
        type: String
    }

});

module.exports = Schema;