import React, { useContext, useRef } from "react";
import { NotesInputProps } from "../interface/noteInputIface";
import useInputNote from "../hooks/useInputNote";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext";

const NoteInput: React.FC<NotesInputProps> = ({ addNote }) => {
  const { localeContext } = useContext(LocaleContext);
  const {
    value: title,
    handleChange: handleTitleChange,
    resetValue: resetTitle,
    charCount: titleCharCount,
  } = useInputNote("", 50);
  const {
    value: body,
    handleChange: handleBodyChange,
    resetValue: resetBody,
  } = useInputNote("");

  const isSubmitDisabled = title === "" || body === "";

  const bodyRef = useRef<HTMLDivElement>(null);

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addNote({ title, body });
    resetTitle();
    resetBody();
    if (bodyRef.current) {
      bodyRef.current.innerText = "";
    }
  };

  const onClearHandler = () => {
    resetTitle();
    if (bodyRef.current) {
      bodyRef.current.innerText = "";
    }
  };

  return (
    <div className="note-app__body">
      <h2>{localeContext === "id" ? "Buat Catatan" : "Create Note"}</h2>
      <form className="note-input" onSubmit={onSubmitHandler}>
        <p className="note-input__title__char-limit">
          {localeContext === "id" ? "Sisa Karakter" : "Remaining Character"} :{" "}
          {50 - titleCharCount}
        </p>
        <input
          type="text"
          placeholder={
            localeContext === "id"
              ? "Masukkan judul disini..."
              : "Input title here... "
          }
          value={title}
          onChange={handleTitleChange}
        />
        <div
          ref={bodyRef}
          contentEditable
          data-placeholder={localeContext === 'id' ? 'Masukkan konten di sini...' : 'Input content here..'}
          onInput={(e) => {
            const target = e.target as HTMLDivElement;
            if (!target.textContent?.trim()) {
              target.innerHTML = ""; // Pastikan benar-benar kosong
            }
            handleBodyChange(e);
          }}
          className="add-new-page__input__body"
          spellCheck={false}
          role="textbox"
          aria-label="Input konten catatan"
        />
        <div className="button-group">
          <button
            className="button-clear"
            type="button"
            onClick={onClearHandler}
          >
            {localeContext === "id" ? "Bersihkan" : "Clear"}
          </button>
          <button
            className={isSubmitDisabled ? "button-disabled" : "button-submit"}
            type="submit"
            disabled={isSubmitDisabled}
          >
            {localeContext === "id" ? "Buat" : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
};

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
