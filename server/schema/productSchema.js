const mongoose = require('mongoose');

const productScheam = new mongoose.Schema({
    id: String,
    title: String,
    imageUrl: String,
    desc: String,
    price: Number,
    sizes: [String]    
})

module.exports = productScheam