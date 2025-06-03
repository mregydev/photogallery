import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import PhotoList from './componenets/Photo/PhotoList';
import Spinner from './componenets/ui/Spinner';

// Lazy load the PhotoDetails component
const PhotoDetails = lazy(() => import('./componenets/Photo/PhotoDetails'));

const App: React.FC = () => (
  <Suspense fallback={<Spinner />}>
    <Routes>
      <Route path='/' element={<PhotoList />} />
      <Route path='/photo/:id' element={<PhotoDetails />} />
    </Routes>
  </Suspense>
);

export default App;
