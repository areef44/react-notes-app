interface NotesInputState {
    title: string;
    body: string;
}

interface NotesInputProps {
    addNotes: (note: { title: string; body: string }) => void; 
}

export type { NotesInputState, NotesInputProps };