import React from "react";

interface UnarchiveButtonProps {
    id: number;
    onUnarchive: (id: number) => void;
  }
  
  class UnarchiveButton extends React.Component<UnarchiveButtonProps> {
    handleUnarchive = () => {
      const { id, onUnarchive } = this.props;
      onUnarchive(id);
    };
  
    render() {
      return (
        <button className="note-item__unarchive-button" onClick={this.handleUnarchive}>
          Pindahkan
        </button>
      );
    }
  }

export default UnarchiveButton;