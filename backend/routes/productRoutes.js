const express = require("express");

const router = express.Router();

const {
    createProduct,
    getProducts,
    getSingleProduct
} = require("../controllers/productController");

const {
    protect,
    admin
} = require("../middleware/authMiddleware");

/* =====================================
   PRODUCT ROUTES
===================================== */

/* GET ALL PRODUCTS */
router.get("/", getProducts);

/* GET SINGLE PRODUCT */
router.get("/:id", getSingleProduct);

/* CREATE PRODUCT (ADMIN ONLY) */
router.post("/", protect, admin, createProduct);

module.exports = router;