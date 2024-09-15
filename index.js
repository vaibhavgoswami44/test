import express from "express";
import getFlipkartProductInfo from "./getFlipkartProductInfo.js";

const app = express();

// Middleware to ignore favicon requests
app.use((req, res, next) => {
    if (req.originalUrl === '/favicon.ico') {
        return res.status(204).end(); // Send 204 No Content for favicon requests
    }
    next();
});

app.get("/:id", async (req, res) => {
    try {
        // Call the function only for valid product URLs
        let data = await getFlipkartProductInfo(`https://www.flipkart.com/%20/p/%20?pid=${req.params.id}`);
        res.json(data);
    } catch (error) {
        console.error('Error in API call:', error);
        res.status(500).json({ error: "Failed to retrieve product information." });
    }
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
