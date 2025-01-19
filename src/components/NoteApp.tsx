import React from "react";
import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";
import DetailPage from "../pages/DetailPage";
import { Route, Routes } from "react-router-dom";
import ArchivePage from "../pages/ArchivePage";
import NotFound from "./NotFound";
import NoteLayout from "./NoteLayout";

const NoteApp: React.FC = () => {
  return (
        <Routes>
          <Route path="/" element={<NoteLayout />} >
            <Route index element={<HomePage />} />
            <Route path="archive" element={<ArchivePage />} />
            <Route path="add" element={<AddPage />} />
            <Route path="notes/:id" element={<DetailPage />} />
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
  );
};

export default NoteApp;
