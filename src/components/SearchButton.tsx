import React from "react";
import PropTypes from "prop-types";

interface SearchButtonProps {
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchQuery: string;
}

const SearchButton: React.FC<SearchButtonProps> = ({
  onSearchChange,
  searchQuery,
}) => {
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
  );
};

// Menambahkan validasi menggunakan PropTypes
SearchButton.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default SearchButton;
