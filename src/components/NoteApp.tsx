import React from "react";
import NoteHeader from "./NoteHeader";
import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";
import { Route, Routes } from "react-router-dom";
import ArchivePage from "../pages/ArchivePage";

const NoteApp: React.FC = () => {
  return (
    <div>
      <header>
        <NoteHeader />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/add" element={<AddPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default NoteApp;
