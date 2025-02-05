import React from "react";
import { addNote } from "../utils/api";
import NoteInput from "../components/NoteInput";
import Note from "../interface/noteIface";
import { useNavigate } from "react-router-dom";

const AddPage: React.FC = () => {
  const navigate = useNavigate();
  // Menambahkan tipe untuk note
  async function onAddNoteHandler(note: Note) {
    try {
      await addNote(note);
      navigate("/");
    } catch (error) {
      console.error("Gagal menambahkan catatan:", error);
    }
  }

  return (
    <section>
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  );
};

export default AddPage;
