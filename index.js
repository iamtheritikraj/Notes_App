import dotenv from "dotenv";
import { connectDB } from "./db/database.js";
import { app } from "./app.js";

// .ENV CONFIG
dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 8000;

// Log environment variables to verify they are loaded
console.log("Environment Variables:");
console.log("PORT:", process.env.PORT);
console.log("MONGODB_URI:", process.env.MONGODB_URI);
console.log("JWT_SECRET_KEY:", process.env.JWT_SECRET_KEY);

// CONNECT DATABASE & RUN SERVER
connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  })
  .catch((err) => {
    console.log("Database Connection Failed !!! ", err);
  });
