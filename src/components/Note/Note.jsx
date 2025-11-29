import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://property-rentals-eight.vercel.app/api/notes";

const Note = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({ name: "", email: "", message: "" });

  const fetchNotes = async () => {
    try {
      const res = await axios.get(API_URL);
      setNotes(res.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setNotes(notes.filter((n) => n.id !== id));

      window.location.reload();
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  const startEdit = (note) => {
    setEditingId(note.id);
    setEditData({
      name: note.name,
      email: note.email,
      message: note.message
    });
  };

  const saveEdit = async () => {
    try {
      const res = await axios.put(`${API_URL}/${editingId}`, editData);

      setNotes(notes.map((n) => (n.id === editingId ? res.data : n)));
      setEditingId(null);

      window.location.reload();
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
      <article className="page">
          <section id='hero'>
            {loading ? (
        <p>Loading...</p>
      ) : notes.length === 0 ? (
        <p>No notes found.</p>
      ) : (
        <div className="notes-wrapper">
          {notes.map((note) => (
            <div className="note-card" key={note.id}>
              {editingId === note.id ? (
                <>
                  <input
                    type="text"
                    value={editData.name}
                    onChange={(e) =>
                      setEditData({ ...editData, name: e.target.value })
                    }
                  />
                  <input
                    type="email"
                    value={editData.email}
                    onChange={(e) =>
                      setEditData({ ...editData, email: e.target.value })
                    }
                  />
                  <textarea
                    rows="4"
                    value={editData.message}
                    onChange={(e) =>
                      setEditData({ ...editData, message: e.target.value })
                    }
                  />

                  <button onClick={saveEdit} className="btn btn-save">
                    Save
                  </button>
                  <button
                    onClick={() => setEditingId(null)} className="btn btn-cancel"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <h3>{note.name}</h3>
                  <p>{note.email}</p>
                  <p>{note.message}</p>

                  <button
                    onClick={() => startEdit(note)}
                    className="btn btn-edit"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteNote(note.id)}
                    className="btn btn-delete"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      )}     
          </section>
      </article>
  );
};

export default Note;
