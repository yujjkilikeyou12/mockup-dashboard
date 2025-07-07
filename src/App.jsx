
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MockupViewer from './MockupViewer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <h1 className="text-3xl font-bold mb-4">Inicio</h1>
        <Link to="/dashboard" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
          Ir al Dashboard
        </Link>
        <Routes>
          <Route path="/dashboard" element={<MockupViewer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
