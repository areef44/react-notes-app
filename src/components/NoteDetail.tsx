import React from "react";
import Note from "../interface/noteIface";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchivedButton";
import { deleteNote,archivedNote,showFormattedDate, unArchivedNote } from "../utils";
import UnarchiveButton from "./UnarchivedButton";
import { useNavigate } from "react-router-dom";
import { FaPaperclip } from "react-icons/fa6";

const NoteDetail: React.FC<Note> = ({ id, title, createdAt, body, archived }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteNote(id);
    navigate('/')
  };
  const handleArchive = () => {
    archivedNote(id);
    navigate('/');
  };
  const handleUnarchive = () => {
    unArchivedNote(id);
    navigate('/')
  }
  return (
    <div className="note-app__body note-detail__body">
        <div className="note-item__content">
          <h3 className="note-item-detail__title"><FaPaperclip /> {title}</h3>
          <p className="note-item-detail__date">{showFormattedDate(createdAt)}</p>
          <p className="note-item-detail__body">{body}</p>
        </div>
        <div className="note-item__action">
          <DeleteButton id={id} onDelete={handleDelete} />
          {
            archived ? (
              <UnarchiveButton id={id} onUnarchive={handleUnarchive}/>
            ) : (
              <ArchiveButton id={id} onArchive={handleArchive} />
            )
          }
        </div>
    </div>
  );
};

export default NoteDetail;
