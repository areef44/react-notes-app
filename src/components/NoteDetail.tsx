import React from "react";
import Note from "../interface/noteIface";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchivedButton";
import {
  deleteNote,
  archiveNote,
  unarchiveNote,
} from "../utils/api";
import { showFormattedDate } from "../utils";
import UnarchiveButton from "./UnarchivedButton";
import { useNavigate } from "react-router-dom";
import { FaPaperclip } from "react-icons/fa6";
import PropTypes from "prop-types";
import parser from "html-react-parser";

const NoteDetail: React.FC<Note> = ({
  id,
  title,
  createdAt,
  body,
  archived,
}) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await deleteNote(id);
      navigate(-1); 
    } catch (error) {
      console.error("Failed to delete note:", error);
    }
    
  };
  const handleArchive = async () => {
    try {
      await archiveNote(id);
      navigate(-1);
    } catch (error) {
      console.error("Failed to archive note:", error);
    }
    
    
  };
  const handleUnarchive = async () => {
    try {
      await unarchiveNote(id);
      navigate(-1);
    } catch (error) {
      console.error("Failed to archive note:", error);
    }
    
    
  };
  return (
    <div className="note-app__body note-detail__body">
      <div className="note-item__content">
        <h3 className="note-item-detail__title">
          <FaPaperclip /> {title}
        </h3>
        <p className="note-item-detail__date">{showFormattedDate(createdAt)}</p>
        <p className="note-item-detail__body">{parser(body)}</p>
      </div>
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={handleDelete} />
        {archived ? (
          <UnarchiveButton id={id} onUnarchive={handleUnarchive} />
        ) : (
          <ArchiveButton id={id} onArchive={handleArchive} />
        )}
      </div>
    </div>
  );
};

NoteDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired, // Tanggal dalam format string
  body: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
};

export default NoteDetail;
