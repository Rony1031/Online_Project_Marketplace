const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Add any additional fields specific to sellers
  // For example, you may include fields like email, companyName, etc.
});

const Seller = mongoose.model("Seller", sellerSchema);

module.exports = Seller;
