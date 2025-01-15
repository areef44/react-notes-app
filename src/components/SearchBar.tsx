import React from "react";
import PropTypes from 'prop-types';
interface SearchBarProps {
    keywordChange: (keyword: string) => void;
    keyword: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ keyword, keywordChange }) => {
        return (
            <div>
                <input 
                    className="input-search"
                    type="text" 
                    placeholder="Cari Catatan..." 
                    value={keyword}
                    onChange={(event) => keywordChange(event.target.value)}
                />
            </div>
        )
}

SearchBar.propTypes = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired
}

export default SearchBar;