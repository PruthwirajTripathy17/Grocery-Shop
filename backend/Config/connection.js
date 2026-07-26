const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.set("strictQuery", true);
  const remoteUri = process.env.MONGODB_URI;
  const localUri = "mongodb://127.0.0.1:27017/grocery-shop";

  console.log("Attempting database connection...");
  try {
    console.log("Connecting to Remote Database URI:", remoteUri);
    // Setting serverSelectionTimeoutMS to 5 seconds so fallback happens relatively fast if Atlas rejects connection
    await mongoose.connect(remoteUri, { serverSelectionTimeoutMS: 5000 });
    console.log("App Is Connected To Database Successfully...!!");
  } catch (error) {
    console.warn("Could not connect to MongoDB Atlas (perhaps IP is not whitelisted).");
    console.warn("Falling back to local MongoDB at:", localUri);
    try {
      await mongoose.connect(localUri);
      console.log("Connected to Local MongoDB Successfully...!!");
    } catch (localError) {
      console.error("Critical Error: Could not connect to local MongoDB either.", localError);
      process.exit(1);
    }
  }
};

module.exports = connectDB;
