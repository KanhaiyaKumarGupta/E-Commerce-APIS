const mongoose = require('mongoose');
const productVariant = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    SKU: {
        type: String,
        required: true,
        unique: true
    },
    additionalCost: {
        type: Number,
        required: true,
        default: 0
    },
    stockCount: {
        type: Number,
        required: true,
        default: 0
    }
});

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    variants: [productVariant]
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
