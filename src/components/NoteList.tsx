import React from "react";
import NoteItem from "./NoteItem";
import Note from "../interface/noteIface";


interface NotesListProps {
    notes: Note[];
}

class NoteList extends React.Component<NotesListProps>{
    render() {
        const { notes } = this.props

        return (
            <div className="notes-list">
                {
                notes.map((note) => (
                    <NoteItem
                        key={note.id}
                        note={note}
                    />
                ))
                }

            </div>
        )
    }
} 

export default NoteList;