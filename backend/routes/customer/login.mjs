// Import necessary modules and dependencies
import express from "express";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import ExpressBrute from "express-brute";
import jwt from "jsonwebtoken";

import db from "../../db/conn.mjs";
import checkAuth from "../../middleware/checkauth.mjs";

dotenv.config();
const router = express.Router();

var store = new ExpressBrute.MemoryStore();
var bruteForce = new ExpressBrute(store);

// Login Route
router.post('/', /* bruteForce.prevent, */ async (req, res) => {
    const { username, password } = req.body;    

    console.log('username: ', username, ' password: ', password);

    const collection = db.collection("users");
    const user = await collection.findOne({ username });

    if (!user) {
        console.log('Auth Failed');
        
        return res.status(401).json({ message: "Authentication failed!" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    console.log(passwordMatch);

    if (!passwordMatch) {
        return res.status(401).json({ message: "Authentication failed!" });
    } else {
        const token = jwt.sign({ username }, process.env.JWT_TOKEN_LEN, { expiresIn: "1h" });
        console.log(token);
        const response = {
            message: 'Authentication Successful',
            
        }
        return res.status(200).json({ message: "Authentication Successful", _id: user._id, token: token, username: user.username, isadmin: user.isadmin });
    }
});

// Logout Route
router.post('/logout', checkAuth, (req, res) => {
    // Invalidate the token on the client side
    // Here, we can respond with a message indicating successful logout
    res.status(200).json({ message: "Logout successful" });
});

// Health Check Route
router.get('/health', (req, res) => {
    res.status(200).send('OK');
});

export default router;
