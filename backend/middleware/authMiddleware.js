const jwt = require("jsonwebtoken");
const User = require("../models/User");

/* =====================================
   PROTECT ROUTES
===================================== */
const protect = async (req, res, next) => {

    let token;

    /* CHECK TOKEN */
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {

        try {

            /* GET TOKEN */
            token = req.headers.authorization.split(" ")[1];

            /* VERIFY TOKEN */
            const decoded = jwt.verify(
                token,
                process.env.JWT_SECRET
            );

            /* GET USER */
            req.user = await User.findById(decoded.id)
                .select("-password");

            next();

        } catch (error) {

            res.status(401).json({
                message: "Not Authorized, Token Failed"
            });

        }

    }

    if (!token) {

        res.status(401).json({
            message: "No Token, Authorization Denied"
        });

    }
};

/* =====================================
   ADMIN ACCESS
===================================== */
const admin = (req, res, next) => {

    if (req.user && req.user.role === "admin") {

        next();

    } else {

        res.status(403).json({
            message: "Admin Access Only"
        });

    }
};

module.exports = {
    protect,
    admin
};