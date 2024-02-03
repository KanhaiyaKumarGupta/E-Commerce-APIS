

const Product = require('../models/productSchema')

exports.createProduct = async (req, res) => {
    try {
        const { name, description, price, variants } = req.body
        const product = new Product({
            name,
            description,
            price,
            variants
        })
        await product.save()

        res.status(201).json({
            message: "Product created succesfully",
            product: product
        });

    } catch (error) {
        res.status(500).json({
            message: "Error creating product",
            error: error.message
        });
    }
};
exports.createProductVariant = async (req, res) => {
    const productId = req.params.productId;
    const variants = req.body.variants;

    if (!variants || !Array.isArray(variants)) {
        return res.status(400).json({ error: "Invalid variants data" });
    }

    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }

        for (let i = 0; i < variants.length; i++) {
            const { name, SKU, additionalCost, stockCount } = variants[i];

            if (!name || !SKU) {
                return res.status(400).json({ error: `Missing 'name' or 'SKU' for variant at index ${i}` });
            }

            const variantExists = product.variants.some(variant => variant.SKU === SKU);
            if (variantExists) {
                return res.status(400).json({ error: `A variant with SKU ${SKU} already exists` });
            }

            const newVariant = { name, SKU, additionalCost, stockCount };
            product.variants.push(newVariant);
        }

        await product.save();
        res.status(201).json({
            success: "New Product Variants created successfully",
            variants: product.variants
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: error.message });
    }
};
