import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Register from "./views/Register/Register";
import Profile from "./views/Profile/Profile";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <div className="main-content">
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/profile" element={<Profile/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
