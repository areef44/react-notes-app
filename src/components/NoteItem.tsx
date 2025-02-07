import React from "react";
import Note from "../interface/noteIface";
import NoteItemContent from "./NoteItemContent";
import PropTypes from "prop-types";

interface NoteItemProps {
  note: Note;
}

const NoteItem: React.FC<NoteItemProps> = ({ note }) => {
  return (
    <div className="note-item" >
      <NoteItemContent
        id={note.id}
        title={note.title}
        body={note.body}
        createdAt={note.createdAt}
        archived={note.archived}
      />
    </div>
  );
};

NoteItem.propTypes = {
    note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
  }).isRequired,
};

export default NoteItem;
