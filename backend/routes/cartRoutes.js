const express = require("express");

const router = express.Router();

const {
    getCart,
    addToCart,
    removeFromCart,
    updateCartQuantity
} = require("../controllers/cartController");

const {
    protect
} = require("../middleware/authMiddleware");

/* =====================================
   CART ROUTES
===================================== */

/* GET CART */
router.get("/", protect, getCart);

/* ADD TO CART */
router.post("/", protect, addToCart);

/* REMOVE ITEM */
router.delete("/:id", protect, removeFromCart);

/* UPDATE QUANTITY */
router.put("/:id", protect, updateCartQuantity);

module.exports = router;