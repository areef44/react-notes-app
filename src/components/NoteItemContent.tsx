import React from "react";
import Note from "../interface/noteIface";
import { showFormattedDate } from "../utils";
import { Link } from "react-router-dom";
import { FaPaperclip } from "react-icons/fa6";

interface NoteItemContentProps extends Note {}

const NoteItemContent: React.FC<NoteItemContentProps> = ({ id, title, createdAt, body }) => {
        return (
                <div className="note-item__content">
                  <Link to={`/notes/${id}`}>
                    <h3 className="note-item__title"><FaPaperclip /> {title}</h3>
                  </Link>
                    <p className="note-item__date">{showFormattedDate(createdAt)}</p>
                    <p className="note-item__body">{body}</p>
                </div>
        )
}

export default NoteItemContent;