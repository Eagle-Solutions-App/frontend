import "./App.scss";
import Home from "./components/Paneles/Home";
import CreacionProducto from "./components/Creacion/CreacionProducto";
import CreacionDeposito from "./components/Creacion/CreacionDeposito";
import CreacionUsuario from "./components/Creacion/CreacionUsuario";
import Usuarios from "./components/Paneles/Usuarios";
import Depositos from "./components/Paneles/Depositos";
import EditarProducto from "./components/Edicion/EditarProducto";
import Landing from "./components/Landing";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/productos" element={<Home />} />
        <Route path="/producto" element={<CreacionProducto />} />
        <Route path="/editarProd/:id" element={<EditarProducto />} />
        <Route path="/createDepositos" element={<CreacionDeposito />} />
        <Route path="/createUsuario" element={<CreacionUsuario />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/depositos" element={<Depositos />} />
      </Routes>
    </div>
  );
}
export default App;
