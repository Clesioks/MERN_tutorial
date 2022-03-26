import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import noteRoutes from "./routes/noteRoutes.js";
import { errorHandler, notFound } from "./middlewares/errorMiddlewares.js";
import path from "path";

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);

// ---------------- deployment ----------------------

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(path.resolve(__dirname, "frontend", "build", "index.html"))
    );
  });
} else {
  app.get("/"),
    (req, res) => {
      res.send("PI is running");
    };
}

// ---------------- deployment ----------------------

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
