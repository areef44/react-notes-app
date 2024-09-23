import React from "react";
import NoteItem from "./NoteItem";
import Note from "../interface/noteIface";


interface NotesListProps {
    notes: Note[];
    onDelete: (id: number) => void;
}

class NoteList extends React.Component<NotesListProps>{
    render() {
        const { notes,onDelete } = this.props

        return (
            <div className="notes-list">
                {
                notes.map((note) => (
                    <NoteItem
                        key={note.id}
                        note={note}
                        onDelete={onDelete}
                    />

                ))
                }

            </div>
        )
    }
} 

export default NoteList;