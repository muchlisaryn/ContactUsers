import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import User from './Pages/Users/UserPages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/:id" element={<User/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
