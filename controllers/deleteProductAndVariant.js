const Product = require('../models/productSchema')
exports.deleteProductByID = async (req, res) => {
    const productId = req.params.productId;

    try {
        const deletedProduct = await Product.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).json({ error: "Product not found" });
        }

        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ error: "Error occurred while deleting the product" });
    }
};

exports.deleteProductVariantById = async (req, res) => {
    const productId = req.params.productId;
    const productVariantId = req.params.productVariantId;

    try {
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ error: "Product Not Found" });
        }
        const variantIndex = product.variants.findIndex(variant => variant._id.toString() === productVariantId);
        if (variantIndex === -1) {
            return res.status(404).json({ error: "Product Variant Not Found" });
        }

        product.variants.splice(variantIndex, 1);

        await product.save();
        res.status(200).json({ success: "Product Variant Deleted Successfully" });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};