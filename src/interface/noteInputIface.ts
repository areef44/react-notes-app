interface NotesInputState {
    title: string;
    body: string;
}

interface NotesInputProps {
    addNotes: (note: { title: string; body: string }) => void; 
    clearNotes: () => void;
}

export type { NotesInputState, NotesInputProps };