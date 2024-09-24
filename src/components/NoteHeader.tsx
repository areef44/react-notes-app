import React from "react";
import SearchButton from "./SearchButton";

interface NoteHeaderProps {
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    searchQuery: string;
}

class NoteHeader extends React.Component<NoteHeaderProps> {
    render() {
        return (
            <div className="note-app__header">
                <h1>Notes</h1>
                <SearchButton 
                    onSearchChange={this.props.onSearchChange}
                    searchQuery={this.props.searchQuery}
                />
            </div>
        )
    }
}

export default NoteHeader;