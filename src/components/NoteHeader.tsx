import React from "react";
import Navigation from "./Navigation";
import { FiLogOut } from "react-icons/fi";
import ToggleTheme from "./ToggleTheme";

interface NoteHeaderProps {
  logout: () => void;
}

const NoteHeader: React.FC<NoteHeaderProps> = ({logout}) => {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <Navigation />
      <ToggleTheme />
      <button onClick={logout}>Logout <FiLogOut /></button>
    </div>
  );
};

export default NoteHeader;
