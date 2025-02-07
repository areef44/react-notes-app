import React from "react";
import NoteHeaderPublic from "./NoteHeaderPublic";
import { Outlet } from "react-router-dom";

const NoteLayoutPublic: React.FC = () => {
  return (
    <div>
      <header>
        <NoteHeaderPublic />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default NoteLayoutPublic;