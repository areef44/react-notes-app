import React from "react";
import SearchButton from "./SearchButton";

interface NoteHeaderProps {
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    searchQuery: string;
}

const NoteHeader: React.FC<NoteHeaderProps> = ({ onSearchChange, searchQuery }) => {
    return (
        <div className="note-app__header">
            <h1>Notes</h1>
            <SearchButton 
                onSearchChange={onSearchChange}
                searchQuery={searchQuery}
            />
        </div>
    );
};

export default NoteHeader;