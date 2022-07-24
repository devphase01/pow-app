import './App.css';

import { Route, Routes } from 'react-router-dom';
import { Home, Breeds, Gallery, Voting } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/voting" element={<Voting />}/>
        <Route path="/breeds" element={<Breeds />}/>
        <Route path="/gallery" element={<Gallery />}/>
      </Routes>
    </div>
  );
}

export default App;
