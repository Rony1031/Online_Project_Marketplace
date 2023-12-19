const mongoose = require("mongoose");

const buyerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Add any additional fields specific to buyers
  // For example, you may include fields like email, fullName, etc.
});

const Buyer = mongoose.model("Buyer", buyerSchema);

module.exports = Buyer;
