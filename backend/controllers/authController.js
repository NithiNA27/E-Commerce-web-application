const User = require("../models/User");
const jwt = require("jsonwebtoken");

/* =================================
   REGISTER USER
================================= */
const registerUser = async (req, res) => {

    try {

        const { name, mobile } = req.body;

        const existingUser = await User.findOne({ mobile });

        if (existingUser) {

            const token = jwt.sign(
                {
                    id: existingUser._id,
                    role: existingUser.role
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: "7d"
                }
            );

            return res.status(200).json({
                message: "Login Successful",
                token,
                user: {
                    id: existingUser._id,
                    name: existingUser.name,
                    mobile: existingUser.mobile,
                    role: existingUser.role
                }
            });
        }

        const user = await User.create({
            name,
            mobile
        });

        const token = jwt.sign(
            {
                id: user._id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );

        res.status(201).json({
            message: "User Registered Successfully",
            token,
            user: {
                id: user._id,
                name: user.name,
                mobile: user.mobile,
                role: user.role
            }
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


/* =================================
   LOGIN USER
================================= */


module.exports = {
    registerUser
};