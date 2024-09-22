import React from "react";
import { NotesInputProps, NotesInputState } from "../interface/noteInputIface";

class NoteInput extends React.Component<NotesInputProps,NotesInputState> {
    constructor (props: NotesInputProps) {
        super(props);
        // inisialisasi state
        this.state = {
            title: '',
            body: '',
        };
        // binding method
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this)
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this)
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
        this.onClearEventHandler = this.onClearEventHandler.bind(this)
    }

    onTitleChangeEventHandler(event: React.ChangeEvent<HTMLInputElement>) {
            this.setState({ title: event.target.value });
    }

    onBodyChangeEventHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
        this.setState({ body: event.target.value });
    }

    onSubmitEventHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.props.addNotes(this.state);
        
    }

    onClearEventHandler(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        this.setState({ title: '', body: '' });
        this.props.clearNotes();
    }

    render() {
        return (
            <div>
            <h2>Buat Catatan</h2>
            <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                <input 
                    type="text" 
                    placeholder="Masukkan judul disini..." 
                    value={this.state.title} 
                    onChange={this.onTitleChangeEventHandler} 
                />
                <textarea 
                    placeholder="Masukkan catatanmu disini..." 
                    value={this.state.body} 
                    onChange={this.onBodyChangeEventHandler} 
                />
                <div className="button-group">
                    <button 
                        className="button-clear"
                        type="button" 
                        onClick={this.onClearEventHandler}>
                        Clear
                    </button>
                    <button 
                        type="submit">
                        Buat
                    </button>
                </div>
            </form>
            </div>
        )
    }
}

export default NoteInput;