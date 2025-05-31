import React from 'react';
import { Routes, Route } from 'react-router-dom';
import List from './componenets/List';
import PhotoDetails from './componenets/PhotoDetails';


const App: React.FC = () => (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/photo/:id" element={<PhotoDetails />} />
    </Routes>
);

export default App;
