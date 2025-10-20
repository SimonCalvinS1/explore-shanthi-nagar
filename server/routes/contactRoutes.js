import express from "express";
import { body, validationResult } from "express-validator";
import rateLimit from "express-rate-limit";
import xss from "xss";
import Contact from "../models/Contact.js";

const router = express.Router();

// Rate limiter: 5 requests per minute per IP
const contactLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: {
    success: false,
    message: "Too many requests. Please try again later."
  }
});

// POST route — Secure Contact Form
router.post(
  "/api/contact",
  contactLimiter,
  [
    body("name")
      .trim()
      .isLength({ min: 2 })
      .withMessage("Name must be at least 2 characters long"),
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("message")
      .trim()
      .isLength({ min: 1 })
      .withMessage("Message must be at least 1 character long")
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
      const contact = new Contact({ name, email, message });
      await contact.save();
      console.log("📩 Contact request body:", req.body);
      res.status(201).json({
        success: true,
        message: " ~ Message sent successfully"
      });
    } catch (error) {
      console.error(">< Contact form error:", error);
      res.status(500).json({
        success: false,
        message: "Server error while sending message"
      });
    }
  }
);

export default router;