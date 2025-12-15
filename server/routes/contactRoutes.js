import express from "express";
import { body, validationResult } from "express-validator";
import rateLimit from "express-rate-limit";
import Contact from "../models/Contact.js";

const router = express.Router();

const contactLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests. Please try again later."
  }
});

router.post(
  "/",
  contactLimiter,
  [
    body("name").trim().escape().isLength({ min: 1 }),
    body("email").isEmail().normalizeEmail(),
    body("message").trim().escape().isLength({ min: 1 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    try {
      const { name, email, message } = req.body;
      await Contact.create({ name, email, message });
      res.status(201).json({
        success: true,
        message: "Message sent successfully"
      });
    } catch (error) {
      console.error("Contact error:", error);
      res.status(500).json({
        success: false,
        message: "Server error"
      });
    }
  }
);

export default router;
