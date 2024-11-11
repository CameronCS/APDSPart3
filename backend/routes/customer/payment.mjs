import express from "express";
import db from "../../db/conn.mjs";
import checkAuth from "../../middleware/checkauth.mjs"; // Authentication middleware
import { ObjectId } from "mongodb";

const router = express.Router();

// Create a new payment
router.post('/', checkAuth, async (req, res) => {
    const { amount, currency, provider, accountInfo, swiftCode, userID } = req.body;

    // Basic input validation
    if (!amount || !currency || !provider || !accountInfo || !swiftCode || !userID) {
        return res.status(400).json({ message: "All fields are required." });
    }

    try {
        const newPayment = {
            amount,
            currency,
            provider,
            accountInfo,
            swiftCode,
            userID,
            createdAt: new Date(),
            status: "Pending" // Initial status
        };

        const collection = db.collection("payments");
        const result = await collection.insertOne(newPayment);

        res.status(201).json({ message: "Payment created successfully", paymentId: result.insertedId });
    } catch (error) {
        console.error("Error during payment creation:", error);
        res.status(500).json({ message: "Internal server error." });
    }
});

// Retrieve all payments by userID
router.get('/:pid', checkAuth, async (req, res) => {
    const { pid } = req.params;
    console.log(pid);
    
    try {
        // Query payments where userID matches pid
        const collection = db.collection("payments");
        const payments = await collection.find({ userID: pid }).toArray();

        console.log(payments);
        
        if (payments.length > 0) {
            console.log('here');
            res.status(200).json({payments: payments});
        } else {
            res.status(404).json({ message: "No payments found for this user" });
        }
    } catch (error) {
        console.error("Error retrieving payments:", error);
        res.status(500).json({ message: "Internal server error." });
    }
});

// Retrieve a payment by ID
router.get('/:id', checkAuth, async (req, res) => {
    const { id } = { _id: new ObjectId(req.params.id) };
    try {
        const collection = db.collection("payments");
        const payment = await collection.findOne({id}); // Import ObjectId from mongodb

        if (!payment) {
            return res.status(404).json({ message: "Payment not found." });
        }

        res.status(200).json(payment);
    } catch (error) {
        console.error("Error retrieving payment by ID:", error);
        res.status(500).json({ message: "Internal server error." });
    }
});

// Health Check Route
router.get('/health', (req, res) => {
    res.status(200).send("OK");
});

export default router;
