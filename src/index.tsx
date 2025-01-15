import { createRoot } from 'react-dom/client';
import NoteApp from './components/NoteApp';

import './styles/style.css';

// Non-null assertion untuk memastikan elemen root ada
const root = createRoot(document.getElementById('root'));

// Render elemen React ke dalam root
root.render(<NoteApp />);