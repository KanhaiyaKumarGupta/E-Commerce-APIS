const Product = require('../models/productSchema')


exports.searchProductByName = async (req, res) => {
    const productName = req.body.name;

    try {
        const products = await Product.find({ name: { $regex: productName, $options: 'i' } });

        if (!products || products.length === 0) {
            return res.status(404).json({ error: "No Product Found With the Specified Product name" });
        }
        res.status(200).json({ products: products });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: error.message });
    }
};


exports.searchProductByDescription = async (req, res) => {
    const productDescription = req.body.description

    try {
        const products = await Product.find({ description: { $regex: productDescription, $options: 'i' } });

        if (!products || products.length === 0) {
            return res.status(404).json({ error: "No Product Found With the Specified Product Description" });
        }

        res.status(200).json({ products: products })
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: error.message });
    }
}



exports.searchProductVariantname = async (req, res) => {
    const productVariantName = req.body.name;

    try {
        const products = await Product.find({
            "variants.name": { $regex: productVariantName, $options: 'i' }
        });

        const matchingVariants = products.map(product => product.variants.filter(variant =>
            variant.name.toLowerCase().includes(productVariantName.toLowerCase())))
            .flat();

        if (matchingVariants.length === 0) {
            return res.status(404).json({ error: "No Product Variant Found With the Specified Name" });
        }

        res.status(200).json({ variants: matchingVariants });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: error.message });
    }
};