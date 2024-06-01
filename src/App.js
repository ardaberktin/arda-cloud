import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Callback from "./Components/Callback";

//docker run -d -p 8080:80 nextcloud

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/callback" element={<Callback />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
