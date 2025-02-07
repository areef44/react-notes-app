import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LocaleContext from "../contexts/LocaleContext";

const Navigation: React.FC = () => {
  const { localeContext } = useContext(LocaleContext);
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">{localeContext === "id" ? "Beranda" : "Home"}</Link>
        </li>
        <li>
          <Link to="/archive">{localeContext === "id" ? "Arsip" : "Archive"}</Link>
        </li>
        <li>
          <Link to="/add">{localeContext === "id" ? "Tambah Catatan" : "Add Note"}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
