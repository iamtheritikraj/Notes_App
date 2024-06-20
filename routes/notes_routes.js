import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteById,
  updateNote,
  renderEditNote,
} from "../controllers/notes_controllers.js";
import { authvalid } from "../middlewares/authvalid.js";
import { authstatus } from "../middlewares/authstatus.js";

const router = express.Router();


// 👉 GET ALL NOTES        /notes
router.get("/",authvalid, authstatus, getAllNotes);
// 👉 CREATE NEW NOTES     /notes/create
router.post("/create", authvalid, createNote);

// 👉 GET NOTE BY ID       /notes/:noteId
router.get("/:noteId", authvalid, getNoteById);

// 👉 DELETE A NOTE        /notes/delete/:noteId
router.get("/delete/:noteId", authvalid, deleteNote);

// 👉 UPDATE A NOTE        /notes/edit/:noteId
router.get("/edit/:noteId", authvalid, renderEditNote);

// 👉 UPDATE A NOTE        /notes/edit/:noteId
router.post("/edit/:noteId", authvalid, updateNote);

export default router;
