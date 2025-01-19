import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import PropTypes from "prop-types";

interface DeleteButtonProps {
  id: number;
  onDelete: (id: number) => void;
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
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
