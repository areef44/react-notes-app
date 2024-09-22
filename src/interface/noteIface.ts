interface Note {
    id: number;
    title: string;
    body: string;
    createdAt: string; // Bisa menggunakan Date jika ingin menyimpan sebagai objek Date
    archived: boolean;
}

export default Note;