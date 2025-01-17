import React from "react";
import { FaRegCircleDown } from "react-icons/fa6";

interface ArchiveButtonProps {
  id: number;
  onArchive: (id: number) => void;
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

export default ArchiveButton;
