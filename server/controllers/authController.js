const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Buyer = require("../models/Buyer");
const Seller = require("../models/Seller");

const registerBuyer = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new buyer
    const newBuyer = new Buyer({ username, password: hashedPassword });
    await newBuyer.save();

    res.status(201).json({ message: "Buyer registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const registerSeller = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new seller
    const newSeller = new Seller({ username, password: hashedPassword });
    await newSeller.save();

    res.status(201).json({ message: "Seller registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const loginBuyer = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the buyer by username
    const buyer = await Buyer.findOne({ username });

    if (!buyer) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Check if the password is correct
    const passwordMatch = await bcrypt.compare(password, buyer.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate a JWT
    const token = jwt.sign(
      { username: buyer.username, userId: buyer._id, userType: "buyer" },
      process.env.JWT_SECRET
    );

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const loginSeller = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the seller by username
    const seller = await Seller.findOne({ username });

    if (!seller) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Check if the password is correct
    const passwordMatch = await bcrypt.compare(password, seller.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate a JWT
    const token = jwt.sign(
      { username: seller.username, userId: seller._id, userType: "seller" },
      process.env.JWT_SECRET
    );

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  registerBuyer,
  registerSeller,
  loginBuyer,
  loginSeller,
};
