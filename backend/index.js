require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const authRoute = require("./Routes/AuthRoute");

const PORT = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL;

const app = express();

// ✅ Correct CORS middleware (only once)
app.use(
  cors({
    origin: [
      "https://zerodha-invest-app-frontend.onrender.com",
      "https://zerodha-invest-app.onrender.com"
    ],
    credentials: true,
  })
);

// ✅ Middlewares
app.use(cookieParser());
app.use(bodyParser.json());

// ✅ Session middleware (important for auth!)
app.use(
  session({
    secret: "some_secret_key", // 👉 put this in .env for production
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: true,         // ✅ Needed for HTTPS (Render)
      sameSite: "none",     // ✅ Required for cross-origin cookies
    },
  })
);

// ✅ Auth route
app.use("/", authRoute);

// ✅ Data routes
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

// ✅ Connect to MongoDB
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err);
  });
