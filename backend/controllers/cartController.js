
const Cart = require("../models/Cart");
const Product = require("../models/Product");

/* =====================================
   GET USER CART
===================================== */
const getCart = async (req, res) => {

    try {

        let cart = await Cart.findOne({
            user: req.user._id
        }).populate("items.product");

        if (!cart) {

            cart = await Cart.create({
                user: req.user._id,
                items: []
            });

        }

        res.status(200).json(cart);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

/* =====================================
   ADD TO CART
===================================== */
const addToCart = async (req, res) => {

    try {

        const {
            productId,
            quantity
        } = req.body;

        const product = await Product.findById(productId);

        if (!product) {

            return res.status(404).json({
                message: "Product not found"
            });

        }

        let cart = await Cart.findOne({
            user: req.user._id
        });

        if (!cart) {

            cart = await Cart.create({
                user: req.user._id,
                items: []
            });

        }

        const existingItem = cart.items.find(
            item => item.product.toString() === productId
        );

        if (existingItem) {

            existingItem.quantity += quantity;

        } else {

            cart.items.push({
                product: product._id,
                name: product.name,
                image: product.image,
                price: product.price,
                quantity
            });

        }

        await cart.save();

        res.status(200).json({
            message: "Added To Cart",
            cart
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

/* =====================================
   REMOVE FROM CART
===================================== */
const removeFromCart = async (req, res) => {

    try {

        const cart = await Cart.findOne({
            user: req.user._id
        });

        if (!cart) {

            return res.status(404).json({
                message: "Cart not found"
            });

        }

        cart.items = cart.items.filter(
            item => item.product.toString() !== req.params.id
        );

        await cart.save();

        res.status(200).json({
            message: "Item Removed",
            cart
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

/* =====================================
   UPDATE QUANTITY
===================================== */
const updateCartQuantity = async (req, res) => {

    try {

        const {
            quantity
        } = req.body;

        const cart = await Cart.findOne({
            user: req.user._id
        });

        if (!cart) {

            return res.status(404).json({
                message: "Cart not found"
            });

        }

        const item = cart.items.find(
            item => item.product.toString() === req.params.id
        );

        if (!item) {

            return res.status(404).json({
                message: "Item not found"
            });

        }

        item.quantity = quantity;

        await cart.save();

        res.status(200).json({
            message: "Quantity Updated",
            cart
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

module.exports = {
    getCart,
    addToCart,
    removeFromCart,
    updateCartQuantity
};