import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Front from './components/Front';
import Header from './components/Header';
import Contact from './components/Contact';

import './App.css';
import './tailwind.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
