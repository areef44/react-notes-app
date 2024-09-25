import React from "react";

interface UnarchiveButtonProps {
    id: number;
    onUnarchive: (id: number) => void;
  }
  
  const UnarchiveButton : React.FC<UnarchiveButtonProps> = ({ id, onUnarchive }) => {
    const handleUnarchive = () => {
      onUnarchive(id);
    };
      return (
        <button className="note-item__unarchive-button" onClick={handleUnarchive}>
          Pindahkan
        </button>
      );
  }

export default UnarchiveButton;