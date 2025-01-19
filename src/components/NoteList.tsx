import React from "react";
import NoteItem from "./NoteItem";
import Note from "../interface/noteIface";
import PropTypes from "prop-types";

interface NotesListProps {
  notes: Note[];
  onDelete: (id: number) => void;
  onArchive?: (id: number) => void;
  onUnarchive?: (id: number) => void;
}

const NoteList: React.FC<NotesListProps> = ({
  notes,
  onDelete,
  onArchive,
  onUnarchive,
}) => {
  return (
    <div className="note-app__content">
      <div className="notes-list">
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            onDelete={onDelete}
            onArchive={onArchive}
            onUnarchive={onUnarchive}
          />
        ))}
      </div>
    </div>
  );
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func,
  onUnarchive: PropTypes.func,
};

export default NoteList;
