import React from "react";
import Note from "../interface/noteIface";
import NoteItemContent from "./NoteItemContent";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchivedButton";

interface NoteItemProps {
    note: Note;
    onDelete: (id: number) => void;
    onArchive?: (id: number) => void;
}

class NoteItem extends React.Component<NoteItemProps> {
    render() {
        const { note, onDelete, onArchive } = this.props;

        return (
            <div className="note-item">
                <NoteItemContent 
                id={note.id}
                title={note.title} 
                body={note.body} 
                createdAt={note.createdAt}
                archived={note.archived} 
                />
                <div className="note-item__action">
                    <DeleteButton id={note.id} onDelete={onDelete} />
                    {
                        onArchive && (
                            <ArchiveButton id={note.id} onArchive={onArchive}/>
                        )
                    }
                </div>
                    
            </div>
        )
    }
}

export default NoteItem;