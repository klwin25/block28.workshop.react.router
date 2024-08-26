import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Red from "./components/Red";
import Blue from "./components/Blue";

function App() {
  return (
    <div id="container">
      {/* <h1>Hello React Router!</h1> */}
      <div id="navbar">
        <Link to="/blue">blue</Link>
        <Link to="/red">red</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
