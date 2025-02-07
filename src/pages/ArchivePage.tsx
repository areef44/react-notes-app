import React, { useContext } from "react";
import NoteList from "../components/NoteList";
import { useSearchParams } from "react-router-dom";
import Note from "../interface/noteIface";
import SearchBar from "../components/SearchBar";
import { getArchivedNotes,deleteNote } from "../utils/api";
import LocaleContext from "../contexts/LocaleContext";


const ArchivePage: React.FC = () => {
  const { localeContext } = useContext(LocaleContext);
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
      getArchivedNotes().then(({ data }) => {
        setNotes(data || []);
      });
    },[])

    async function onDeleteHandler (id: string) {
      await deleteNote(id);
      const { data } = await getArchivedNotes();
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
        <h2>{localeContext === 'id' ? 'Cari Catatan' : 'Search Note'}</h2>
        <SearchBar
          keyword={keyword}
          keywordChange={onKeywordChangeHandler}
        />
        <h2>{localeContext === 'id' ? 'Daftar Catatan' : 'List Note'}</h2>
        {filteredNotes.length === 0 ? (
          <p className="notes-list__empty-message">{localeContext === 'id' ? 'Tidak Ada Catatan' : 'Notes Not Found!'}</p>
        ) : (
          <NoteList notes={filteredNotes} onDelete={onDeleteHandler} />
        )}
      </div>
    );
}

export default ArchivePage;
