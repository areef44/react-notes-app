import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import PropTypes from "prop-types";

interface DeleteButtonProps {
  id: string;
  onDelete: (id: string) => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ id, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <button className="note-item__delete-button" onClick={handleDelete}>
      <FaRegTrashCan />
    </button>
  );
};

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
