const Tours = require("../models/toursModel");

// Get All tours
const getTours = async (req, res) => {
  try {
    const tours = await Tours.find();
    res.json(tours);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// create a service
const createTour = async (req, res) => {
  try {
    const { image, date, title, info, location, duration, cost } = req.body;
    if (!image || !date || !title || !info || !location || !duration || !cost) {
      return res.status(400).json({ msg: "Please include all fields" });
    }
    const newTour = new Tours({
      image,
      date,
      title,
      info,
      location,
      duration,
      cost,
    });
    const savedTour = await newTour.save();
    res.status(201).json(savedTour);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// update a tour (PUT)
const updateTour = async (req, res) => {
  try {
    const { image, date, title, info, location, duration, cost } = req.body;
    if (!image || !date || !title || !info || !location || !duration || !cost) {
      return res.status(400).json({ msg: "Please include all fields" });
    }
    const tour = await Tours.findById(req.params.id);
    if (!tour) {
      return res.status(404).json({ msg: "Tour not found" });
    }
    tour.image = image;
    tour.date = date;
    tour.title = title;
    tour.info = info;
    tour.location = location;
    tour.duration = duration;
    tour.cost = cost;
    const savedTour = await tour.save();
    res.json(savedTour);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// patch a tour

const patchTour = async (req, res) => {
  try {
    const tour = await Tours.findById(req.params.id);
    if (!tour) {
      return res.status(404).json({ msg: "Tour not found" });
    }
    
    // Apply updates from the request
    Object.assign(tour, req.body);

    const savedTour = await tour.save();
    res.json(savedTour);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// delete a tour
const deleteTour = async (req, res) => {
  try {
    const tour = await Tours.findByIdAndDelete(req.params.id);
    if (!tour) {
      return res.status(404).json({ error: "Tour not found" });
    }
    res.json({ message: "Tour deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// get tour by id

const getTourById = async (req, res) => {
  try {
    const tour = await Tours.findById(req.params.id);
    if (!tour) {
      return res.status(404).json({ error: "Service not found" });
    }
    res.json(tour);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getTours,
  createTour,
  updateTour,
  patchTour,
  deleteTour,
  getTourById,
};
