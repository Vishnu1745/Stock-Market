
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Simple root rendering without any Clerk-specific code
createRoot(document.getElementById("root")!).render(<App />);
