import React, { useContext } from "react";
import NoteList from "../components/NoteList";
import { useSearchParams } from "react-router-dom";
import { getActiveNotes, deleteNote } from "../utils/api";
import Note from "../interface/noteIface";
import SearchBar from "../components/SearchBar";
import LocaleContext from "../contexts/LocaleContext";
import Skeleton from "react-loading-skeleton";

const HomePage: React.FC = () => {
  const { localeContext } = useContext(LocaleContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState<Note[]>([]);
  const [keyword, setKeyword] = React.useState<string>(
    searchParams.get("keyword") || ""
  );

  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const keywordChange = (keyword: string): void => {
    setSearchParams({ keyword });
    setKeyword(keyword);
  };

  React.useEffect(() => {
    setIsLoading(true);
    getActiveNotes().then(({ data }) => {
      setNotes(data || []);
      setIsLoading(false);
    });
  }, []);

  async function onDeleteHandler(id: string) {
    setIsLoading(true);
    await deleteNote(id);
    const { data } = await getActiveNotes();
    setNotes(data || []);
    setIsLoading(false);
  }

  function onKeywordChangeHandler(keyword: string) {
    keywordChange(keyword);
  }

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="note-app__body">
      <h2>{localeContext === "id" ? "Cari Catatan" : "Search Note"}</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <h2>{localeContext === "id" ? "Daftar Catatan" : "List Note"}</h2>
      {isLoading ? (
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          {Array.from({ length: notes.length || 8 }).map((_, index) => (
            <div
              key={index}
              className="skeleton-wrapper"
              style={{
                flex: "1 0 calc(25% - 16px)",
                maxWidth: "calc(25% - 16px)",
                minHeight: "125px",
                boxSizing: "border-box",
              }}
            >
              <Skeleton height={125} baseColor="grey" highlightColor="#f4f4f4"/>
            </div>
          ))}
        </div>
      ) : filteredNotes.length === 0 ? (
        <p className="notes-list__empty-message">
          {localeContext === "id" ? "Tidak Ada Catatan" : "Notes Not Found!"}
        </p>
      ) : (
        <NoteList notes={filteredNotes} onDelete={onDeleteHandler} />
      )}
    </div>
  );
};

export default HomePage;
