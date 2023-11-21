const Tour = require("../models/tours");

// Get All tours
const getTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json(tours);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Single tour by ID
const getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    if (tour) {
      res.json(tour);
    } else {
      res.status(404).json({ msg: `No tour with the id of ${req.params.id}` });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a New tour
const postTour = async (req, res) => {
  try {
    const newtour = new Tour(req.body);
    await newtour.save();
    res.json(newtour);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update tour by ID (PUT)
const putTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    if (tour) {
      Object.assign(tour, req.body);
      await tour.save();
      res.json({ msg: "tour updated", tour });
    } else {
      res.status(404).json({ msg: `No tour with the id of ${req.params.id}` });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update tour by ID (PATCH)
const patchTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    if (tour) {
      Object.assign(tour, req.body);
      await tour.save();
      res.json({ msg: "tour updated", tour });
    } else {
      res.status(404).json({ msg: `No tour with the id of ${req.params.id}` });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete tour by ID
const deleteTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    if (tour) {
      await tour.remove();
      res.json({ msg: "tour deleted", tour });
    } else {
      res.status(404).json({ msg: `No tour with the id of ${req.params.id}` });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getTours,
  getTour,
  putTour,
  patchTour,
  deleteTour,
  postTour,
};
