import React from "react";
import NoteList from "../components/NoteList";
import { deleteNote, getNotes, unArchivedNote } from "../utils";
import { useSearchParams } from "react-router-dom";
import autoBind from "auto-bind";
import Note from "../interface/noteIface";
import SearchBar from "../components/SearchBar";

interface NoteAppState {
  notes: Note[];
  keyword: string;
}

interface ArchivePageProps {
  defaultKeyword: string;
  keywordChange: (keyword: string) => void;
}

const ArchivePageWrapper: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultKeyword = searchParams.get("keyword") || "";

  const keywordChange = (keyword: string): void => {
    setSearchParams({ keyword });
  };

  return (
    <ArchivePage
      defaultKeyword={defaultKeyword}
      keywordChange={keywordChange}
    />
  );
};

class ArchivePage extends React.Component<ArchivePageProps, NoteAppState> {
  constructor(props: ArchivePageProps) {
    super(props);
    this.state = {
      notes: getNotes(),
      keyword: props.defaultKeyword || "",
    };
    autoBind(this);
  }

  onDeleteHandler(id: number) {
    deleteNote(id);
    this.setState({ notes: getNotes() });
  }

  onKeywordChangeHandler(keyword: string) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  }

  onUnarchiveHandler(id: number) {
    unArchivedNote(id);
    this.setState({ notes: getNotes() });
  }

  render() {
    const { keyword, notes } = this.state;

    const filteredNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(keyword.toLowerCase())
    );
    return (
      <div className="note-app__body">
        <h2>Cari Catatan</h2>
        <SearchBar
          keyword={keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        <h2>Daftar Arsip</h2>
        {filteredNotes.filter((note) => note.archived).length === 0 ? (
          <p className="notes-list__empty-message">Tidak Ada Catatan</p>
        ) : (
          <NoteList
            notes={filteredNotes.filter((note) => note.archived)}
            onDelete={this.onDeleteHandler}
            onUnarchive={this.onUnarchiveHandler}
          />
        )}
      </div>
    );
  }
}

export default ArchivePageWrapper;
