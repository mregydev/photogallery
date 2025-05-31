import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import List from './componenets/List';
import Spinner from './componenets/Spinner';

// Lazy load the PhotoDetails component
const PhotoDetails = lazy(() => import('./componenets/PhotoDetails'));

const App: React.FC = () => (
  <Suspense fallback={<Spinner />}>
    <Routes>
      <Route path='/' element={<List />} />
      <Route path='/photo/:id' element={<PhotoDetails />} />
    </Routes>
  </Suspense>
);

export default App;
