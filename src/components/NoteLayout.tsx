import React from "react";
import NoteHeader from "./NoteHeader";
import { Outlet } from "react-router-dom";

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

export default NoteLayout;