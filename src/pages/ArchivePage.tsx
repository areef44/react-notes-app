import React from "react";
import NoteList from "../components/NoteList";
import { useSearchParams } from "react-router-dom";
import { deleteNote, getNotes } from "../utils";
import autoBind from "auto-bind";
import Note from "../interface/noteIface";
import SearchBar from "../components/SearchBar";

interface NoteAppState {
    notes: Note[];
    keyword: string;
}

class ArchivePage extends React.Component<{}, NoteAppState> {
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

    render() {
        const { keyword, notes } = this.state;

        const filteredNotes = notes.filter(note =>
            note.title.toLowerCase().includes(keyword.toLowerCase())
        ); 
        return (
            <div className="note-app__body">
                <h2>Cari Catatan</h2>
                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                <h2>Daftar Arsip</h2>
                {filteredNotes.filter(note => note.archived).length === 0 ? (
                    <p className="notes-list__empty-message">Tidak Ada Catatan</p>
                ) : (
                    <NoteList notes={filteredNotes.filter(note => note.archived)} onDelete={this.onDeleteHandler}/>
                )}
            </div>
        )
    }
}

export default ArchivePage