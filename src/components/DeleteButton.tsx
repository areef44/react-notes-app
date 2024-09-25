import React from "react";

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
        Hapus
      </button>
    );

}

export default DeleteButton;