import React from "react";

interface DeleteButtonProps {
  id: number;
  onDelete: (id: number) => void;
}

class DeleteButton extends React.Component<DeleteButtonProps> {
  handleDelete = () => {
    const { id, onDelete } = this.props;
    onDelete(id);
  };

  render() {
    return (
      <button className="note-item__delete-button" onClick={this.handleDelete}>
        Hapus
      </button>
    );
  }
}

export default DeleteButton;