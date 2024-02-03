const Product = require('../models/productSchema')


exports.GetProductByID = async (req, res) => {
    const productId = req.params.productId;

    try {
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ error: "Product Not Found" });
        }

        res.status(200).json({ product: product });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Error while fetching the Product" });
    }
};



exports.GetProductVariantById = async (req, res) => {
    const productId = req.params.productId;
    const productVariantId = req.params.productVariantId;

    try {
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        const variant = product.variants.find(v => v._id.toString() === productVariantId);

        if (!variant) {
            return res.status(404).json({ error: "Product Variant not found" });
        }

        res.status(200).json({ variant });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
