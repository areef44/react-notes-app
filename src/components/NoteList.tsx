import React from "react";
import NoteItem from "./NoteItem";
import Note from "../interface/noteIface";
import PropTypes from "prop-types";

interface NotesListProps {
  notes: Note[];
}

const NoteList: React.FC<NotesListProps> = ({
  notes,
}) => {
  return (
    <div className="note-app__content">
      <div className="notes-list">
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
          />
        ))}
      </div>
    </div>
  );
};

const NoteShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape(NoteShape).isRequired).isRequired,
};

export default NoteList;
