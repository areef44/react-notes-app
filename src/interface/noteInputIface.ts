interface NotesInputState {
    title: string;
    body: string;
    titleCharCount: number;
}

interface NotesInputProps {
    addNote: (note: { title: string; body: string; }) => void; 
}

export type { NotesInputState, NotesInputProps };