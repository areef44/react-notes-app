import React,{useContext} from "react";
import ToggleTheme from "./ToggleTheme";
import ToggleLocale from "./ToggleLocale";
import LocaleContext from "../contexts/LocaleContext"

const NoteHeaderPublic: React.FC = () => {
  const { localeContext } = useContext(LocaleContext);
  return (
    <div className="note-app__header">
      <h1>{localeContext === "id" ? "Catatan Saya" : "My Notes"}</h1>
      <ToggleLocale />
      <ToggleTheme />
    </div>
  );
};

export default NoteHeaderPublic;
