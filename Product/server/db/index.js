const mongoose = require('mongoose');

/**
 * Connection to your database
 */
const URI = 'mongodb://127.0.0.1:27017/bestbuy-products';

mongoose.connect(URI);

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose connected');
});

// module.exports = async () => {
//     try {
//         await mongoose.connect( URI )
//         var db = mongoose.connection
//         db.once('open', () => console.log('db connected'))
//         console.log('Mongoose connected')  
        

//     } catch (error) {
//         console.log('Mongoose error:', error)
//     }
// }

module.exports = db;