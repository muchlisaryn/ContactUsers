import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import UserPost from './Pages/User Post/UserPost';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/user/post/:userId" element={<UserPost/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
