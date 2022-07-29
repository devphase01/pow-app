import './App.css';

import { Route, Routes } from 'react-router-dom';
import { Home, Breeds, Gallery, Voting, Liked, Disliked, Favourite } from './pages';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBreeds } from './app/reducers/ActionCreator';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBreeds());
  }, [ ]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/voting" element={<Voting />} />
        <Route path="/breeds" element={<Breeds />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/disliked" element={<Disliked />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>
    </div>
  );
}

export default App;
