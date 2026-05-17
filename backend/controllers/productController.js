const Product = require("../models/Product");

/* =====================================
   CREATE PRODUCT
===================================== */
const createProduct = async (req, res) => {

    try {

        const {
            name,
            image,
            description,
            price,
            category,
            stock
        } = req.body;

        const product = await Product.create({
            name,
            image,
            description,
            price,
            category,
            stock
        });

        res.status(201).json({
            message: "Product Created",
            product
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

/* =====================================
   GET ALL PRODUCTS
===================================== */
const getProducts = async (req, res) => {

    try {

        const products = await Product.find();

        res.status(200).json(products);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

/* =====================================
   GET SINGLE PRODUCT
===================================== */
const getSingleProduct = async (req, res) => {

    try {

        const product = await Product.findById(req.params.id);

        if (!product) {

            return res.status(404).json({
                message: "Product Not Found"
            });

        }

        res.status(200).json(product);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

module.exports = {
    createProduct,
    getProducts,
    getSingleProduct
};