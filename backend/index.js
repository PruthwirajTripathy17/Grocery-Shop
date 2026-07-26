//Config
require("dotenv").config();
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/.env" });
}

const cloudinary = require("cloudinary");
const expressFileUpload = require("express-fileupload");
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const connectDB = require("./Config/connection");
const userRoutes = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const categoryRoute = require("./routes/categoryRoute");

// CORS Configuration
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin && (origin.startsWith("http://localhost") || origin.includes("vercel.app") || origin.includes("onrender.com"))) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

//Body Parser
app.use(bodyParser.urlencoded({ limit: "200mb", extended: true }));

//Cookies Parser
app.use(cookieParser());

//Database Connect
connectDB();
//JSON
app.use(express.json());

//Use Express File Upload
app.use(expressFileUpload());

//Config Cloudniary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET_KEY,
  secure: true,
});
let a = 10
app.listen(process.env.PORT || 8000, () => {
  console.log(`Server Running At ${process.env.PORT || 8000}`);
});

//Load Route
app.use("/api/user", userRoutes);
app.use("/api/product", productRoute);
app.use("/api/category", categoryRoute);

//Access Front End Static Files
const fs = require("fs");
const buildPath = fs.existsSync(path.join(__dirname, "../frontend/dist"))
  ? path.join(__dirname, "../frontend/dist")
  : path.join(__dirname, "../frontend/build");

app.use(express.static(buildPath));

//Access Front End All URL
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(buildPath, "index.html"));
});
