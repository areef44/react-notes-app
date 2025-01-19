import React from "react";
import NoteHeader from "./NoteHeader";
import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";
import DetailPage from "../pages/DetailPage"
import { Route, Routes } from "react-router-dom";
import ArchivePage from "../pages/ArchivePage";
import NotFound from "./NotFound";

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
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
    </div>
  );
};

export default NoteApp;
