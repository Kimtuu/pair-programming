const express = require("express");
const serviceController = require("../controllers/servicesController");
const { checkRole } = require("../middleware/rolesMiddleware");
const { route } = require("./usersRoutes");
const router = express.Router();

// Get All service
router.get("/", serviceController.getAll);

// Get Single user by ID
router.get("/:id", serviceController.getService);

// Create a New user
router.post("/", checkRole("admin"), serviceController.postService);

// Update user by ID
router.put("/:id", checkRole("admin"), serviceController.putService);

// Delete user by ID
router.delete("/:id", checkRole("admin"), serviceController.deleteservice);

// Update user partially by ID
router.patch("/:id", checkRole("admin"), serviceController.patchService);

module.exports = router;
