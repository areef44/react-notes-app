import React, { useContext } from "react";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext";
interface SearchBarProps {
  keywordChange: (keyword: string) => void;
  keyword: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ keyword, keywordChange }) => {
  const { localeContext } = useContext(LocaleContext); 
  return (
    <div>
      <input
        className="input-search"
        type="text"
        placeholder={localeContext === 'id' ? 'Cari Catatan..' : 'Search Note..'}
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
      />
    </div>
  );
};

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
