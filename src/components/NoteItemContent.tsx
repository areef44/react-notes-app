import React from "react";
import Note from "../interface/noteIface";
import { showFormattedDate } from "../utils";

interface NoteItemContentProps extends Note {}

const NoteItemContent: React.FC<NoteItemContentProps> = ({ title, createdAt, body }) => {
        return (
            <div className="note-item__content">
                <h3 className="note-item__title">{title}</h3>
                <p className="note-item__date">{showFormattedDate(createdAt)}</p>
                <p className="note-item__body">{body}</p>
            </div>
        )

}

export default NoteItemContent;