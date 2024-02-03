const Product = require('../models/productSchema')


exports.updateProductByID = async (req, res) => {
    console.log(req.body)
    const productId = req.params.productId
    const updatedData = req.body

    try {

        const product = await Product.findById(productId)
        if (!product) {
            return res.status(404).json({ error: "Product Not Found" })
        }
        for (let key in updatedData) {
            product[key] = updatedData[key]
        }
        await product.save()
        res.status(200).json({ success: "Product updated successfully", product: product });
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ error: "Error while Updating the product" })
    }
}

exports.updateProductVariantById = async (req, res) => {
    const productId = req.params.productId;
    const productVariantID = req.params.productVariantID; // Corrected the typo here
    const updatedVariantData = req.body;

    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ error: "Product Not found" });
        }


        const productVariant = product.variants.find(variant => variant._id.toString() === productVariantID);

        if (!productVariant) {
            return res.status(404).json({ error: "Product Variant not found" });
        }
        for (let key in updatedVariantData) {
            productVariant[key] = updatedVariantData[key];
        }
        
        await product.save();

        res.status(200).json({ variant: productVariant });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: error.message });
    }
};