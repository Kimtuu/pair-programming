const express = require("express");
const servicesController = require("../controllers/servicesController");
const { checkRole } = require("../middleware/rolesMiddleware");
const router = express.Router();

// Get All service
router.get("/", servicesController.getServices);

// Get Single user by ID
router.get("/:id", servicesController.getServiceById);

router.post("/", servicesController.createService);

// patch a service
router.patch("/:id", servicesController.patchService);

// Accessible only by users with the "admin" role
// router.post("/", checkRole("admin"), serviceController.createservice);
router.put("/:id", servicesController.updateService);
router.delete("/:id", servicesController.deleteService);

module.exports = router;
