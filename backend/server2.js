import express from "express";
import notes from "../backend/data/notes.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Olá mundo");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);

  res.json(note);
});

app.listen(5001, console.log("Servidor rodando na porta 5001"));
