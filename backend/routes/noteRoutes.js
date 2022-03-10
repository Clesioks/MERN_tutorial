import express from "express";
import {
  createNote,
  DeleteNote,
  getNoteById,
  getNotes,
  UpdateNote,
} from "../controllers/noteController.js";
import protect from "../middlewares/authMiddlewares.js";

const router = express.Router();

router.route("/").get(protect, getNotes);
router.route("/create").post(protect, createNote);
router
  .route("/:id")
  .get(getNoteById)
  .put(protect, UpdateNote)
  .put()
  .delete(protect, DeleteNote);

export default router;
