import React from "react";
import NoteList from "./NoteList";
import { getInitialData } from "../utils";
import Note from "../interface/noteIface";
import NoteInput from "./NoteInput";
import NoteHeader from "./NoteHeader";


interface NoteAppState {
    notes: Note[];
    searchQuery: string;
}

class NoteApp extends React.Component<{}, NoteAppState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            notes: getInitialData(),
            searchQuery: "",
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    onDeleteHandler(id: number) {
        const notes = this.state.notes.filter(note => note.id !== id)
        this.setState({ notes })
    }

    onAddNoteHandler(note: { title: string, body: string }) {
        this.setState((prevState : any) => {
            return {
                notes: [
                    ...prevState.notes,
                {
                    id: +new Date(),
                    title: note.title,
                    body: note.body,
                    createdAt: +new Date(),
                    archived: false
                }
                ]
            }
        })
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

    handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ searchQuery: event.target.value });
    }


    render() {
        const { searchQuery, notes } = this.state;

        const filteredNotes = notes.filter(note =>
            note.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return (
            <div>
                <NoteHeader onSearchChange={this.handleSearchChange} searchQuery={searchQuery}/>
                <NoteInput addNotes={this.onAddNoteHandler} />
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
                </div>
                
            </div>
        )
    }
}

export default NoteApp;