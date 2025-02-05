import React from "react";
import Navigation from "./Navigation";
import { FiLogOut } from "react-icons/fi";

interface NoteHeaderProps {
  logout: () => void;
}

const NoteHeader: React.FC<NoteHeaderProps> = ({logout}) => {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <Navigation />
      <button onClick={logout}>Logout <FiLogOut /></button>
    </div>
  );
};

export default NoteHeader;
