import React from "react";
import { getNotes } from "../utils";
import Note from "../interface/noteIface";
import NoteHeader from "./NoteHeader";
import autoBind from "auto-bind";
import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";
import { Route, Routes } from 'react-router-dom'
import ArchivePage from "../pages/ArchivePage";


interface NoteAppState {
    notes: Note[];
    searchQuery: string;
}

class NoteApp extends React.Component<{}, NoteAppState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            notes: getNotes(),
            searchQuery: "",
        }

        autoBind(this)
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

    onUnarchiveHandler(id: number) {
        const notes = this.state.notes.map((note) => {
            if(note.id === id) {
                return { ...note, archived: false};
            }
            return note;
        });
        this.setState({ notes });
    }


    render() {
        return (
            <div>
                <NoteHeader />
                <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/archive" element={<ArchivePage />}/>
                    <Route path="/add" element={<AddPage />} />
                </Routes>
                </main>
                {/* <NoteInput addNote={this.onAddNoteHandler} />
                <div className="note-app__body">
                    <h2>Catatan Aktif</h2>
                        {filteredNotes.filter(note => !note.archived).length === 0 ? (
                            <p className="notes-list__empty-message">Tidak Ada Catatan</p>
                        ) : (
                            <NoteList notes={filteredNotes.filter(note => !note.archived)} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler}/>
                        )}
                    <h2>Arsip Catatan</h2>
                        {filteredNotes.filter(note => note.archived).length === 0 ? (
                            <p className="notes-list__empty-message">Tidak Ada Catatan</p>
                        ) : (
                            <NoteList notes={filteredNotes.filter(note => note.archived)} onDelete={this.onDeleteHandler} onUnarchive={this.onUnarchiveHandler}/>
                        )}
                </div> */}
                
            </div>
        )
    }
}

export default NoteApp;