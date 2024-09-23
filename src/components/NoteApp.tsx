import React from "react";
import NoteList from "./NoteList";
import { getInitialData } from "../utils";
import Note from "../interface/noteIface";
import NoteInput from "./NoteInput";
import { NotesInputState } from "../interface/noteInputIface";


interface NoteAppState {
    notes: Note[];
}

class NoteApp extends React.Component<{}, NoteAppState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            notes: getInitialData(),
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onDeleteHandler(id: number) {
        const notes = this.state.notes.filter(note => note.id !== id)
        this.setState({ notes })
    }

    onAddNoteHandler({ title, body} : NotesInputState) {
        this.setState((prevState : any) => {
            return {
                notes: [
                    ...prevState.notes,
                {
                    id: +new Date(),
                    title,
                    body,
                    createdAt: +new Date(),
                    archived: false
                }
                ]
            }
        })
    }


    render() {
        return (
            <div className="note-app__body">
                <NoteInput addNotes={this.onAddNoteHandler} />
                <h2>Catatan Aktif</h2>
                <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler}/>
                <h2>Arsip Catatan</h2>
            </div>
        )
    }
}

export default NoteApp;