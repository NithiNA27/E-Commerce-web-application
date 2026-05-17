const express = require("express");

const router = express.Router();

const {
    placeOrder,
    getMyOrders,
    getAllOrders,
    updateOrderStatus
} = require("../controllers/orderController");

const {
    protect,
    admin
} = require("../middleware/authMiddleware");

/* =====================================
   CUSTOMER ROUTES
===================================== */

/* PLACE ORDER */
router.post("/", protect, placeOrder);

/* MY ORDERS */
router.get("/my-orders", protect, getMyOrders);

/* =====================================
   ADMIN ROUTES
===================================== */

/* GET ALL ORDERS */
router.get("/", protect, admin, getAllOrders);

/* UPDATE STATUS */
router.put("/:id", protect, admin, updateOrderStatus);

module.exports = router;