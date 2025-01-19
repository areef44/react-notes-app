import React from "react";
import NoteList from "../components/NoteList";
import { useSearchParams } from "react-router-dom";
import { deleteNote, getNotes, archivedNote } from "../utils";
import autoBind from "auto-bind";
import Note from "../interface/noteIface";
import SearchBar from "../components/SearchBar";
import PropTypes from "prop-types";

interface NoteAppState {
  notes: Note[];
  keyword: string;
}

interface HomePageProps {
  defaultKeyword: string;
  keywordChange: (keyword: string) => void;
}

const HomePageWrapper: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultKeyword = searchParams.get("keyword") || ""; // Menambahkan default value

  // Menambahkan tipe pada parameter
  const keywordChange = (keyword: string): void => {
    setSearchParams({ keyword });
  };

  return (
    <HomePage defaultKeyword={defaultKeyword} keywordChange={keywordChange} />
  );
};

class HomePage extends React.Component<HomePageProps, NoteAppState> {
  // add props type
  static propTypes = {
    defaultKeyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired,
  };

  constructor(props: HomePageProps) {
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
    this.setState({ keyword }, () => {
      this.props.keywordChange(keyword);
    });
  }

  onArchiveHandler(id: number) {
    archivedNote(id);
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
        <h2>Daftar Catatan</h2>
        {filteredNotes.filter((note) => !note.archived).length === 0 ? (
          <p className="notes-list__empty-message">Tidak Ada Catatan</p>
        ) : (
          <NoteList
            notes={filteredNotes.filter((note) => !note.archived)}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
        )}
      </div>
    );
  }
}

export default HomePageWrapper;
