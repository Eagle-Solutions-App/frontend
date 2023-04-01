import "./App.scss";
import Home from "./components/Home";
import CreacionProducto from "./components/CreacionProducto";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

/* axios.defaults.baseURL = "http://localhost:3001"; */

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/producto" component={<CreacionProducto />} />
      </Routes>
    </div>
  );
}

export default App;
