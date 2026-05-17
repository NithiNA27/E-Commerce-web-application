const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
{
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    orderItems: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true
            },

            name: String,

            quantity: Number,

            price: Number,

            image: String
        }
    ],

    shippingAddress: {
        address: String,
        city: String,
        postalCode: String,
        country: String
    },

    paymentMethod: {
        type: String,
        default: "COD"
    },

    totalPrice: {
        type: Number,
        required: true
    },

    orderStatus: {
        type: String,
        enum: [
            "Pending",
            "Accepted",
            "Rejected",
            "Processing",
            "Shipped",
            "Delivered"
        ],
        default: "Pending"
    }

},
{
    timestamps: true
}
);

module.exports = mongoose.model("Order", orderSchema);