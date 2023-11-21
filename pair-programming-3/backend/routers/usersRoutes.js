const express = require("express");
const usersController = require("../controllers/usersController");
const { checkRole } = require("../middleware/rolesMiddleware");
const router = express.Router();

// Get All users
router.get("/", usersController.getUsers);

// Get Single user by ID
router.get("/:id", usersController.getUser);

// Create a New user
router.post("/", checkRole("admin"), usersController.postUser);

// Update user by ID
router.put("/:id", checkRole("admin"), usersController.putUser);

// Delete user by ID
router.delete("/:id", checkRole("admin"), usersController.deleteuser);

// Update user partially by ID
router.patch("/:id", checkRole("admin"), usersController.patchUser);

module.exports = router;
