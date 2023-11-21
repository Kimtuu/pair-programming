const mongoose = require("mongoose");

const servicesSchema = new mongoose.Schema({
  icon: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const Services = mongoose.model("Services", servicesSchema);

module.exports = Services;
