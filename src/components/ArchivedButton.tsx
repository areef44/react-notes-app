import React from "react";

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
      Arsipkan
    </button>
  );
};

export default ArchiveButton;
