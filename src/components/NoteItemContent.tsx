import React from "react";
import Note from "../interface/noteIface";
import { showFormattedDate } from "../utils";

interface NoteItemContentProps extends Note {}

class NoteItemContent extends React.Component<NoteItemContentProps> {
    render() {
        const { id, title, body, createdAt, archived } = this.props;

        return (
            <div className="note-item__content">
                <h3 className="note-item__title">{title}</h3>
                <p className="note-item__date">{showFormattedDate(createdAt)}</p>
                <p className="note-item__body">{body}</p>
                <p>{archived}</p>
            </div>
        )
    }
}

export default NoteItemContent;