const mongoose = require('mongoose');

const productScheam = require('../schema/productSchema');

const Product = mongoose.model("product", productScheam);

module.exports = Product