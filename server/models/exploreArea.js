import mongoose from "mongoose";

const exploreAreaSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  name: String,
  description: String,
  attractions: [
    {
      title: String,
      category: String,
      description: String
    }
  ],
  restaurants: [
    {
      name: String,
      cuisine: String,
      rating: Number
    }
  ]
}, { collection: "explore_areas" });

export default mongoose.model("ExploreArea", exploreAreaSchema);
