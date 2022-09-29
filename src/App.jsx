import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
