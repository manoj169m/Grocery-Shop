const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    ItemType: {
        type: String,
        required: true
    },
    BrandName: {
        type: String,
        required: true
    },
    ItemName: {
        type: String,
        required: true
    },
    ItemRate: {
        type: Number,
        required: true
    },
    ItemImage: {
        type: String,
        required: true
    }
});

const ProductModel = mongoose.model('items', ProductsSchema);

module.exports = ProductModel;
