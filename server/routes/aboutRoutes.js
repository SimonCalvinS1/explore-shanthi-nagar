import express from "express";
import AboutImage from "../models/AboutImage.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const images = await AboutImage.find();
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch about images" });
  }
});

export default router;