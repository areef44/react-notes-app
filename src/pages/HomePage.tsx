import React from "react";
import NoteList from "../components/NoteList";
import { useSearchParams } from "react-router-dom";
import { deleteNote, getNotes, archivedNote } from "../utils";
import autoBind from "auto-bind";
import Note from "../interface/noteIface";
import SearchBar from "../components/SearchBar";

interface NoteAppState {
    notes: Note[];
    keyword: string;
}

interface HomePageProps {
    defaultKeyword: string;
    keywordChange: (keyword: string) => void;
  }

interface HomePageWrapperProps {}

const HomePageWrapper: React.FC<HomePageWrapperProps> = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get("keyword") || ""; // Jika null, gunakan string kosong sebagai default
  
    // Menambahkan tipe pada parameter
    function changeSearchParams(keyword: string): void {
      setSearchParams({ keyword });
    }
  
    return (
      <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
    );
  };

class HomePage extends React.Component<{}, NoteAppState,HomePageProps> {
    constructor(props: {}) {
            super(props);
            this.state = {
                notes: getNotes(),
                keyword: props.defaultKeyword || '',
            }
            autoBind(this)
    }

    onDeleteHandler(id: number) {
        deleteNote(id);
        this.setState({ notes: getNotes() });
    }

    onKeywordChangeHandler(keyword: string){
        this.setState(() => {
            return {
              keyword,
            }
        });

        this.props.keywordChange(keyword)
    }

    onArchiveHandler(id: number) {
        const notes = this.state.notes.map((note) => {
            if(note.id === id) {
                return { ...note, archived: true};
            }
            return note;
        });
        this.setState({ notes });
    }

    render() {
        const { keyword, notes } = this.state;

        const filteredNotes = notes.filter(note =>
            note.title.toLowerCase().includes(keyword.toLowerCase())
        );

        return (
            <div className="note-app__body">
                <h2>Cari Catatan</h2>
                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                <h2>Daftar Catatan</h2>
                {filteredNotes.filter(note => !note.archived).length === 0 ? (
                    <p className="notes-list__empty-message">Tidak Ada Catatan</p>
                ) : (
                    <NoteList notes={filteredNotes.filter(note => !note.archived)} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler}/>
                )}
            </div>
        )
    }
}

export default HomePageWrapper