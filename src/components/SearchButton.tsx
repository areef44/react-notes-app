import React from "react";

interface SearchButtonProps {
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    searchQuery: string;
}

const SearchButton: React.FC<SearchButtonProps> = ({ onSearchChange, searchQuery }) => {
        return (
            <div>
                <input 
                    className="input-search"
                    type="text" 
                    placeholder="Cari Catatan..." 
                    value={searchQuery}
                    onChange={onSearchChange}
                />
            </div>
        )
}

export default SearchButton;