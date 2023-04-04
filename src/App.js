import "./App.scss";
import Home from "./components/Home";
import CreacionProducto from "./components/CreacionProducto";
import Usuarios from "./components/Usuarios";
import EditarProducto from "./components/EditarProducto";
import Landing from "./components/Landing";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route exact path="/" element={<Landing />} /> */}
        <Route exact path="/" element={<Home />} />
        <Route path="/producto" element={<CreacionProducto />} />
        <Route path="/editarProd/:id" element={<EditarProducto />} />
        {/* <Route path="/editarUsuario/:id" element={<EditarUsuario />} /> */}
        <Route path="/Usuarios" element={<Usuarios />} />
      </Routes>
    </div>
  );
}
export default App;
