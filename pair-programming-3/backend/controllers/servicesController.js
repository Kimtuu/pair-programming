const Service = require("../models/services");

// Get All services
const getAll = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Single service by ID
const getService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (service) {
      res.json(service);
    } else {
      res
        .status(404)
        .json({ msg: `No service with the id of ${req.params.id}` });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a New service
const postService = async (req, res) => {
  try {
    const newService = new Service(req.body);
    await newService.save();
    res.json(newService);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Replace a service by ID (PUT)
const putService = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (service) {
      res.json({ msg: "Service replaced", service });
    } else {
      res
        .status(404)
        .json({ msg: `No service with the id of ${req.params.id}` });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a service by ID (PATCH)
const patchService = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (service) {
      res.json({ msg: "Service updated", service });
    } else {
      res
        .status(404)
        .json({ msg: `No service with the id of ${req.params.id}` });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete service by ID
const deleteservice = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (service) {
      res.json({ msg: "Service deleted", service });
    } else {
      res
        .status(404)
        .json({ msg: `No service with the id of ${req.params.id}` });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getAll,
  getService,
  deleteservice,
  patchService,
  putService,
  postService,
};
