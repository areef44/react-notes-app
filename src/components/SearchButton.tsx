import React from "react";

interface SearchButtonProps {
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    searchQuery: string;
}

class SearchButton extends React.Component<SearchButtonProps> {
    render() {
        return (
            <div>
                <input 
                    className="input-search"
                    type="text" 
                    placeholder="Cari Catatan..." 
                    value={this.props.searchQuery}
                    onChange={this.props.onSearchChange}
                />
            </div>
        )
    }
}

export default SearchButton;