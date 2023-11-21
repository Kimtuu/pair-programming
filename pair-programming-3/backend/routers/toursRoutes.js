const express = require("express");
const tourController = require("../controllers/toursController");
const { checkRole } = require("../middleware/rolesMiddleware");
const router = express.Router();

// Get all tours
router.get("/", tourController.getTours);

// Get a single tour by ID
router.get("/:id", tourController.getTour);

// Create a new tour
router.post("/", checkRole("admin"), tourController.postTour);

// Update a tour by ID
router.put("/:id", checkRole("admin"), tourController.putTour);

// Delete a tour by ID
router.delete("/:id", checkRole("admin"), tourController.deleteTour);
router.patch("/:id", checkRole("admin"), tourController.patchTour);

module.exports = router;
