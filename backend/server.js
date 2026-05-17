const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const cartRoutes = require("./routes/cartRoutes");


const connectDB = require("./config/db");
const { protect } = require("./middleware/authMiddleware");

dotenv.config();

/* -----------------------------
   DATABASE CONNECTION
------------------------------ */
connectDB();

/* -----------------------------
   EXPRESS APP
------------------------------ */
const app = express();

/* -----------------------------
   MIDDLEWARE
------------------------------ */
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/cart", cartRoutes);


/* -----------------------------
   TEST ROUTE
------------------------------ */
app.get("/", (req, res) => {
    res.send("Shivam Auto Workshop Backend Running");
});

app.get("/api/protected", protect, (req, res) => {

    res.json({
        message: "Protected Route Accessed",
        user: req.user
    });

});

app.use("/api/products", productRoutes);


/* -----------------------------
   PORT
------------------------------ */
const PORT = process.env.PORT || 5000;

/* -----------------------------
   SERVER START
------------------------------ */
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});