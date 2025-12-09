import express from "express";
import AboutImage from "../models/AboutImage.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.set('Cache-Control', 'public, max-age=3600');
    
    const images = await AboutImage.find().lean();
    
    if (!images || images.length === 0) {
      return res.status(404).json({ 
        error: "No about images found",
        data: [] 
      });
    }
    
    res.json(images);
  } catch (error) {
    console.error("Error fetching about images:", error);
    res.status(500).json({ 
      error: "Failed to fetch about images",
      message: error.message 
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const image = await AboutImage.findById(req.params.id).lean();
    
    if (!image) {
      return res.status(404).json({ error: "Image not found" });
    }
    
    res.json(image);
  } catch (error) {
    console.error("Error fetching about image:", error);
    res.status(500).json({ 
      error: "Failed to fetch about image",
      message: error.message 
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, description, url } = req.body;
    
    if (!title || !description || !url) {
      return res.status(400).json({ 
        error: "Missing required fields: title, description, url" 
      });
    }
    
    const newImage = new AboutImage({
      title,
      description,
      url
    });
    
    await newImage.save();
    res.status(201).json(newImage);
  } catch (error) {
    console.error("Error creating about image:", error);
    res.status(500).json({ 
      error: "Failed to create about image",
      message: error.message 
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { title, description, url } = req.body;
    
    const image = await AboutImage.findByIdAndUpdate(
      req.params.id,
      { title, description, url },
      { new: true, runValidators: true }
    );
    
    if (!image) {
      return res.status(404).json({ error: "Image not found" });
    }
    
    res.json(image);
  } catch (error) {
    console.error("Error updating about image:", error);
    res.status(500).json({ 
      error: "Failed to update about image",
      message: error.message 
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const image = await AboutImage.findByIdAndDelete(req.params.id);
    
    if (!image) {
      return res.status(404).json({ error: "Image not found" });
    }
    
    res.json({ 
      success: true, 
      message: "Image deleted successfully",
      data: image 
    });
  } catch (error) {
    console.error("Error deleting about image:", error);
    res.status(500).json({ 
      error: "Failed to delete about image",
      message: error.message 
    });
  }
});

export default router;