import React from "react";
import { NotesInputProps, NotesInputState } from "../interface/noteInputIface";


class NoteInput extends React.Component<NotesInputProps,NotesInputState> {
    constructor (props: NotesInputProps) {
        super(props);
        // inisialisasi state
        this.state = {
            title: '',
            body: '',
            titleCharCount: 0,
        };
        // binding method
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this)
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this)
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
        this.onClearHandler = this.onClearHandler.bind(this)
    }

    onTitleChangeEventHandler(event: React.ChangeEvent<HTMLInputElement>) {
            const title = event.target.value;
            if(title.length <= 50) {
                const titleCharCount = title.length 
                this.setState({ title, titleCharCount });
            }
    }

    onBodyChangeEventHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
        this.setState({ body: event.target.value });
    }

    onSubmitEventHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.props.addNotes(this.state);
        this.onClearHandler();
    }

    onClearHandler() {
        this.setState({
            title: "",
            body: "",
            titleCharCount: 0,
        });
    }

    render() {
        const isSubmitDisabled = this.state.title === '' || this.state.body === '';

        return (
            <div>
            <h2>Buat Catatan</h2>
            <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                <p className="note-input__title__char-limit">Jumlah karakter: {this.state.titleCharCount}</p>
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
                        onClick={this.onClearHandler}
                        >
                        Clear
                    </button>
                    <button 
                        className={isSubmitDisabled ? "button-disabled" : "button-submit"}
                        type="submit"
                        disabled={isSubmitDisabled}
                        >
                        Buat
                    </button>
                </div>
            </form>
            </div>
        )
    }
}

export default NoteInput;