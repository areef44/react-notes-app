import React from "react";
import NoteHeader from "./NoteHeader";
import { Outlet } from "react-router-dom";

const NoteLayout: React.FC = () => {
  return (
    <div>
      <header>
        <NoteHeader />
      </header>
      <main>
        <Outlet /> 
      </main>
    </div>
  );
};

export default NoteLayout;