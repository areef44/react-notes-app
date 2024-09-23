import React from "react";

interface ArchiveButtonProps {
  id: number;
  onArchive: (id: number) => void;
}

class ArchiveButton extends React.Component<ArchiveButtonProps> {
  handleArchive = () => {
    const { id, onArchive } = this.props;
    onArchive(id);
  };

  render() {
    return (
      <button className="note-item__archive-button" onClick={this.handleArchive}>
        Arsipkan
      </button>
    );
  }
}

export default ArchiveButton;