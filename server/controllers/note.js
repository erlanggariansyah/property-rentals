let notes = [];
let currentId = 1;

exports.createNote = (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All field mandatory" });
  }

  const newNote = {
    id: currentId++,
    name,
    email,
    message
  };

  notes.push(newNote);

  console.log("Note created:", newNote);

  res.status(201).json(newNote);
};

exports.getAllNotes = (req, res) => {
  console.log("All notes:", notes);
  res.json(notes);
};

exports.getNoteById = (req, res) => {
  const { id } = req.params;
  const note = notes.find(n => n.id === parseInt(id));

  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }

  res.json(note);
};

exports.updateNote = (req, res) => {
  const { id } = req.params;
  const { name, email, message } = req.body;

  const note = notes.find(n => n.id === parseInt(id));

  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }

  note.name = name ?? note.name;
  note.email = email ?? note.email;
  note.message = message ?? note.message;

  console.log("Note updated:", note);

  res.json({ message: "Updated successfully", note });
};

exports.deleteNote = (req, res) => {
  const { id } = req.params;
  const index = notes.findIndex(n => n.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ message: "Note not found" });
  }

  const deleted = notes.splice(index, 1);

  console.log("Note deleted:", deleted);

  res.json({ message: "Deleted successfully" });
};
