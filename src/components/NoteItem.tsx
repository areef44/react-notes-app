import React from "react";
import Note from "../interface/noteIface";
import NoteItemContent from "./NoteItemContent";

interface NoteItemProps {
    note: Note;
}

class NoteItem extends React.Component<NoteItemProps> {
    render() {
        const { note } = this.props;

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
        )
    }
}

export default NoteItem;