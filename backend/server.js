import express from "express";
import notes from "../backend/data/notes.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Olá Mundo!");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
