const mongoose = require('mongoose')

const connectionString = 'mongodb://localhost/react-shopping-cart';
function runDB() {
    mongoose.connect(process.env.MONGO_URI || connectionString, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })
    .then(res=> console.log("connection Done"))
}

module.exports = runDB;