import express from "express";
import getNotes from "../controllers/noteController.js";
import protect from "../middlewares/authMiddlewares.js";

const router = express.Router();

router.route("/").get(protect, getNotes);
// router.route('/create').post()
// router.route("/:id").get().put().delete()

export default router;
