import React from "react";

interface ArchiveButtonProps {
  id: number;
  onDelete: (id: number) => void;
}

class ArchiveButton extends React.Component<ArchiveButtonProps> {
  handleDelete = () => {
    const { id, onDelete } = this.props;
    onDelete(id);
  };

  render() {
    return (
      <button className="note-item__archive-button" onClick={this.handleDelete}>
        Arsipkan
      </button>
    );
  }
}

export default ArchiveButton;