import React from 'react';
import { addNote } from '../utils';
import NoteInput from '../components/NoteInput';
import Note from '../interface/noteIface';
import { useNavigate } from 'react-router-dom';

const AddPage: React.FC = () => {
    const navigate = useNavigate();
    // Menambahkan tipe untuk note
    function onAddNoteHandler(note: Note): void {
        addNote(note);
        navigate('/');
    }

    return (
        <section>
            <NoteInput addNote={onAddNoteHandler} />
        </section>
    );
}

export default AddPage;