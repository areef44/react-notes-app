import React from "react";
import { FaRegCircleDown } from "react-icons/fa6";
import PropTypes from "prop-types";

interface ArchiveButtonProps {
  id: string;
  onArchive: (id: string) => void;
}

const ArchiveButton: React.FC<ArchiveButtonProps> = ({ id, onArchive }) => {
  const handleArchive = () => {
    onArchive(id);
  };

  return (
    <button className="note-item__archive-button" onClick={handleArchive}>
      <FaRegCircleDown />
    </button>
  );
};

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default ArchiveButton;
