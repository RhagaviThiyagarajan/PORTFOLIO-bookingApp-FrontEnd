import Home from './pages/home/Home';
import List from './pages/list/List.jsx';
import Hotel from './pages/hotel/Hotel.jsx';
import Login from './pages/login/Login.jsx';
import SignUp from './signup/SignUp.jsx';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
