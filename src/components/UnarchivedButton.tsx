import React from "react";
import { FaRegCircleUp } from "react-icons/fa6";

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
          <FaRegCircleUp />
        </button>
      );
  }

export default UnarchiveButton;