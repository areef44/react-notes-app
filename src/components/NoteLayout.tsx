import React from "react";
import NoteHeader from "./NoteHeader";
import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";

interface NoteLayoutProps {
  onLogout: () => void;
}

const NoteLayout: React.FC<NoteLayoutProps> = ({ onLogout }) => {
  return (
    <div>
      <header>
        <NoteHeader logout={onLogout}/>
      </header>
      <main>
        <Outlet /> 
      </main>
    </div>
  );
};

NoteLayout.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default NoteLayout;