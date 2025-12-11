import express from "express";
import ExploreArea from "../models/exploreArea.js";

const router = express.Router();

/**
 * @route   GET /api/explore
 * @desc    Get all explore areas
 */
router.get("/", async (req, res) => {
    try {
        const areas = await ExploreArea.find();
        res.json(areas);
    } catch (error) {
        console.error("Error fetching explore areas:", error);
        res.status(500).json({ error: "Server error while fetching explore areas" });
    }
});

/**
 * @route   GET /api/explore/:slug
 * @desc    Get a specific area by slug
 */
router.get("/:slug", async (req, res) => {
    try {
        const area = await ExploreArea.findOne({ slug: req.params.slug });

        if (!area) {
            return res.status(404).json({ error: "Area not found" });
        }

        res.json(area);
    } catch (error) {
        console.error("Error fetching area:", error);
        res.status(500).json({ error: "Server error while fetching area" });
    }
});


// ---------------------------
// OPTIONAL: Admin Functions
// Uncomment when needed
// ---------------------------

// CREATE new area
// router.post("/", async (req, res) => {
//     try {
//         const newArea = new ExploreArea(req.body);
//         await newArea.save();
//         res.status(201).json(newArea);
//     } catch (error) {
//         console.error("Error creating area:", error);
//         res.status(500).json({ error: "Error creating area" });
//     }
// });

// UPDATE area
// router.put("/:slug", async (req, res) => {
//     try {
//         const updated = await ExploreArea.findOneAndUpdate(
//             { slug: req.params.slug },
//             req.body,
//             { new: true }
//         );

//         if (!updated) return res.status(404).json({ error: "Area not found" });

//         res.json(updated);
//     } catch (error) {
//         console.error("Error updating area:", error);
//         res.status(500).json({ error: "Error updating area" });
//     }
// });

// DELETE area
// router.delete("/:slug", async (req, res) => {
//     try {
//         const deleted = await ExploreArea.findOneAndDelete({ slug: req.params.slug });

//         if (!deleted) return res.status(404).json({ error: "Area not found" });

//         res.json({ message: "Area deleted successfully" });
//     } catch (error) {
//         console.error("Error deleting area:", error);
//         res.status(500).json({ error: "Error deleting area" });
//     }
// });

export default router;
