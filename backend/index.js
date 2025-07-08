require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const authRoute = require("./Routes/AuthRoute");

const PORT = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL;

const app = express();

// ✅ CORS setup before any route or body parser
app.use(
  cors({
    origin: ["https://zerodha-invest-app-frontend.onrender.com", "https://zerodha-invest-app.onrender.com"],
    credentials: true,
  })
);
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);


// ✅ Middleware
app.use(cookieParser());
app.use(bodyParser.json()); // or app.use(express.json());

// ✅ Auth route
app.use("/", authRoute);

// ✅ Routes
app.get("/allHoldings", async (req, res) => {
  try {
    const holdings = await HoldingsModel.find({});
    res.json(holdings);
  } catch (err) {
    res.status(500).json({ error: "Error fetching holdings" });
  }
});

app.get("/allPosition", async (req, res) => {
  try {
    const positions = await PositionsModel.find({});
    res.json(positions);
  } catch (err) {
    res.status(500).json({ error: "Error fetching positions" });
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();
    res.send("Order saved");
  } catch (err) {
    res.status(500).json({ error: "Error saving order" });
  }
});

// ✅ Connect to DB and start server
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err);
  });
