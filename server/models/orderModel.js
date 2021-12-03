const mongoose = require('mongoose');

const orderSchema = require('../schema/orderSchema');

const Order = mongoose.model("order", orderSchema);

module.exports = Order