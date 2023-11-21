const Services = require("../models/servicesModel");

// Get All services

const getServices = async (req, res) => {
  try {
    const services = await Services.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// create a service
const createService = async (req, res) => {
  try {
    const { icon, title, text } = req.body;
    if (!icon || !title || !text) {
      return res.status(400).json({ msg: "Please include all fields" });
    }
    const newService = new Services({
      icon,
      title,
      text,
    });
    const savedService = await newService.save();
    res.status(201).json(savedService);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// update a service (PUT)
const updateService = async (req, res) => {
  try {
    const { icon, title, text } = req.body;
    if (!icon || !title || !text) {
      return res.status(400).json({ msg: "Please include all fields" });
    }
    const service = await Services.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ msg: "Service not found" });
    }
    service.icon = icon;
    service.title = title;
    service.text = text;
    const savedService = await service.save();
    res.json(savedService);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// patch a service

const patchService = async (req, res) => {
  try {
    const service = await Services.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ msg: "Service not found" });
    }
    
    // Apply updates from the request
    Object.assign(service, req.body);

    const savedService = await service.save();
    res.json(savedService);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// delete a service
const deleteService = async (req, res) => {
  try {
    const service = await Services.findByIdAndDelete(req.params.id);
    if (!service) {
      return res.status(404).json({ error: "Service not found" });
    }
    res.json({ message: "Service deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// get service by id

const getServiceById = async (req, res) => {
  try {
    const service = await Services.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ error: "Service not found" });
    }
    res.json(service);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getServices,
  createService,
  updateService,
  deleteService,
  getServiceById,
  patchService,
};
