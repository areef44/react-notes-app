import React from "react";
import NoteList from "../components/NoteList";
import { useSearchParams } from "react-router-dom";
import { getActiveNotes,deleteNote } from "../utils/api";
import Note from "../interface/noteIface";
import SearchBar from "../components/SearchBar";

const HomePage: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [notes, setNotes] = React.useState<Note[]>([]);
    const [keyword, setKeyword] = React.useState<string>(
      searchParams.get("keyword") || ""
    ); // Menambahkan default value

    const keywordChange = (keyword: string): void => {
      setSearchParams({ keyword });
      setKeyword(keyword);
    };

    React.useEffect(() => {
      getActiveNotes().then(({ data }) => {
        setNotes(data || []);
      });
    },[])

    async function onDeleteHandler (id: string) {
      await deleteNote(id);
      const { data } = await getActiveNotes();
      setNotes(data || [])
    };

    function onKeywordChangeHandler(keyword: string) {
      keywordChange(keyword)
    }

    const filteredNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(keyword.toLowerCase())
    );

    return (
            <div className="note-app__body">
              <h2>Cari Catatan</h2>
              <SearchBar
                keyword={keyword}
                keywordChange={onKeywordChangeHandler}
              />
              <h2>Daftar Catatan</h2>
              {filteredNotes.length === 0 ? (
                <p className="notes-list__empty-message">Tidak Ada Catatan</p>
              ) : (
                <NoteList notes={filteredNotes} onDelete={onDeleteHandler} />
              )}
            </div>
    );
}

export default HomePage
