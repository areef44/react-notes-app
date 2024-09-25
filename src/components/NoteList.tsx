import React from "react";
import NoteItem from "./NoteItem";
import Note from "../interface/noteIface";


interface NotesListProps {
    notes: Note[];
    onDelete: (id: number) => void;
    onArchive?: (id: number) => void;
    onUnarchive?: (id: number) => void;
}

const NoteList : React.FC<NotesListProps> = ({ notes,onDelete, onArchive, onUnarchive}) => {
        return (
            <div className="note-app__body">
                <div className="notes-list">
                    {
                    notes.map((note) => (
                        <NoteItem
                            key={note.id}
                            note={note}
                            onDelete={onDelete}
                            onArchive={onArchive}
                            onUnarchive={onUnarchive}
                        />
                    ))
                    }

                </div>
            </div>
        )
} 

export default NoteList;