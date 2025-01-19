import React from "react";
import Note from "../interface/noteIface";
import { showFormattedDate } from "../utils";
import { Link } from "react-router-dom";
import { FaPaperclip } from "react-icons/fa6";
import PropTypes from "prop-types";
import parser from "html-react-parser";

interface NoteItemContentProps extends Note {}

const NoteItemContent: React.FC<NoteItemContentProps> = ({
  id,
  title,
  createdAt,
  body,
}) => {
  return (
    <div className="note-item__content">
      <Link to={`/notes/${id}`}>
        <h3 className="note-item__title">
          <FaPaperclip /> {title}
        </h3>
      </Link>
      <p className="note-item__date">{showFormattedDate(createdAt)}</p>
      <p className="note-item__body">{parser(body)}</p>
    </div>
  );
};

NoteItemContent.propTypes = {
  id: PropTypes.number.isRequired, // ID harus berupa angka dan wajib diisi
  title: PropTypes.string.isRequired, // Title harus berupa string dan wajib diisi
  createdAt: PropTypes.string.isRequired, // CreatedAt harus berupa string dan wajib diisi
  body: PropTypes.string.isRequired, // Body harus berupa string dan wajib diisi
};

export default NoteItemContent;
