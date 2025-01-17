import React from "react";
import Note from "../interface/noteIface";
import NoteItemContent from "./NoteItemContent";

interface NoteItemProps {
  note: Note;
}

const NoteItem: React.FC<NoteItemProps> = ({
  note,
}) => {
  return (
    <div className="note-item">
    
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

export default NoteItem;
