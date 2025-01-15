import React from "react";
import Navigation from "./Navigation";

interface NoteHeaderProps {
}

const NoteHeader: React.FC<NoteHeaderProps> = () => {
    return (
        <div className="note-app__header">
            <h1>Notes</h1>
            <Navigation />
        </div>
    );
};

export default NoteHeader;