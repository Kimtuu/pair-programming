const express = require("express");
const toursController = require("../controllers/toursController");
//const { checkRole } = require("../middleware/rolesMiddleware");

const router = express.Router();

// Get all tours
router.get("/", toursController.getTours);

// Get a single tour by ID
router.get("/:id", toursController.getTourById);

// Create a new tour
router.post("/", toursController.createTour);

// Update a tour by ID
router.put("/:id", toursController.updateTour);

// Patch a tour by ID
router.patch("/:id", toursController.patchTour);

// Delete a tour by ID
router.delete("/:id", toursController.deleteTour);

//checkRole("admin")

module.exports = router;
