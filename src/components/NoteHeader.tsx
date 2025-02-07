import React,{useContext} from "react";
import Navigation from "./Navigation";
import { FiLogOut } from "react-icons/fi";
import ToggleTheme from "./ToggleTheme";
import ToggleLocale from "./ToggleLocale";
import LocaleContext from "../contexts/LocaleContext"
import PropTypes from "prop-types";

interface NoteHeaderProps {
  logout: () => void;
}

const NoteHeader: React.FC<NoteHeaderProps> = ({logout}) => {
  const { localeContext } = useContext(LocaleContext);
  return (
    <div className="note-app__header">
      <h1>{localeContext === "id" ? "Catatan Saya" : "My Notes"}</h1>
      <Navigation />
      <ToggleLocale />
      <ToggleTheme />
      <div onClick={logout} className="menu-style"><FiLogOut size={25}/></div>
    </div>
  );
};

NoteHeader.propTypes ={
  logout: PropTypes.func.isRequired
}

export default NoteHeader;
