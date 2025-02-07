import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";
import DetailPage from "../pages/DetailPage";
import ArchivePage from "../pages/ArchivePage";
import NotFound from "./NotFound";
import NoteLayout from "./NoteLayout";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import { getUserLogged, putAccessToken, User } from "../utils/api";
import NoteLayoutPublic from "./NoteLayoutPublic";

// Tipe data pengguna yang terautentikasi
interface LoginSuccessProps {
  accessToken: string;
}

const NoteApp: React.FC = () => {
  const [authedUser, setAuthedUser] = useState<User | null>(null);
  const [initializing, setInitializing] = useState<boolean>(true);

  // Fungsi untuk menangani sukses login
  const loginSuccess = async ({ accessToken }: LoginSuccessProps) => {
    putAccessToken(accessToken);
    try {
      const { data } = await getUserLogged();
      setAuthedUser(data); // Mengatur pengguna yang sudah login
      setInitializing(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setInitializing(false);
    }
  };

  const onLogout = (): void => {
    setAuthedUser(null);
    putAccessToken('');
  };

  // Mengambil data pengguna saat komponen dimount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await getUserLogged();
        setAuthedUser(data);
        setInitializing(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setInitializing(false);
      }
    };

    fetchUserData();
  }, []);

  // Menampilkan tampilan loading saat data pengguna sedang dimuat
  if (initializing) {
    return null;
  } else {
    return (
      <div>
          {authedUser === null ? (
            // Rute untuk pengguna yang belum login
            <Routes>
              <Route path="/" element={<NoteLayoutPublic />}>
                <Route index element={<LoginPage loginSuccess={loginSuccess} />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Route>
            </Routes>
          ) : (
            // Rute untuk pengguna yang sudah login
            <Routes>
              <Route path="/" element={<NoteLayout onLogout={onLogout}/>}>
                <Route index element={<HomePage />} />
                <Route path="archive" element={<ArchivePage />} />
                <Route path="add" element={<AddPage />} />
                <Route path="notes/:id" element={<DetailPage />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          )}
      </div>
    );
  }

};

export default NoteApp;
