import Note from "../models/notes_model.js";

// 👉 GET ALL NOTES CTRL
export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find({ createdBy: req.user.userId });
    res.render("notes", { notes, authvalid: req.isAuthenticated });
  } catch (error) {
    res.status(500).json({ msg: "Error fetching notes !!", error });
  }
};

// 👉 GET SINGLE NOTE BY ID CTRL
export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.noteId);

    if (!note) return res.status(404).json({ msg: "No note found !!" });

    res.render("singleNote", { note });
  } catch (error) {
    res.status(500).json({ msg: "Error fetching notes !!", error });
  }
};

// 👉 CREATE A NEW NOTE CTRL
export const createNote = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description)
      res.status(400).json({ msg: "All fields are required !!" });

    await Note.create({
      title,
      description,
      createdBy: req.user.userId,
    });

    res.redirect("/notes");
  } catch (error) {
    res.status(500).json({ msg: "Error creating notes !!", error });
  }
};

// 👉 DELETE NOTE CTRL
export const deleteNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.noteId);
    if (!note) res.status(404).json({ msg: "No note found !!" });

    await Note.findByIdAndDelete(req.params.noteId);
    res.redirect("/notes");
  } catch (error) {
    res.status(500).json({ msg: "Error delete a notes !!", error });
  }
};

// RENDER UPDATE PAGE
export const renderEditNote = async (req, res) => {
  const note = await Note.findById(req.params.noteId);
  if (!note) res.status(404).json({ msg: "No note found !!" });

  res.render("editNote", { note });
};

// 👉 UPDATE NOTE CTRL
export const updateNote = async (req, res) => {
  try {
    await Note.findByIdAndUpdate(req.params.noteId, req.body, { new: true });
    res.redirect("/notes");
  } catch (error) {
    res.status(500).json({ msg: "Error updating a note !!", error });
  }
};
