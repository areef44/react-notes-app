import React from "react";
import NoteList from "./NoteList";
import { getInitialData } from "../utils";
import Note from "../interface/noteIface";
import NoteInput from "./NoteInput";

interface NoteAppState {
    notes: Note[];
}

class NoteApp extends React.Component<{}, NoteAppState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            notes: getInitialData(),
        }
        console.log(this.state)
    }

    render() {
        return (
            <div className="note-app__body">
                <NoteInput />
                <NoteList notes={this.state.notes} />
            </div>
        )
    }
}

export default NoteApp;