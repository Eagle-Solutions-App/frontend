import "./App.scss";
import Home from "./components/Home";
import CreacionProducto from "./components/CreacionProducto";
import Usuarios from "./components/Usuarios";
import Depositos from "./components/Depositos";
import EditarProducto from "./components/EditarProducto";
import Landing from "./components/Landing";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import CreacionDeposito from "./components/CreacionDeposito";

axios.defaults.baseURL = "http://localhost:3001";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/producto" element={<CreacionProducto />} />
        <Route path="/editarProd/:id" element={<EditarProducto />} />
        <Route path="/createDepositos" element={<CreacionDeposito />} />
        {/* <Route path="/editarUsuario/:id" element={<EditarUsuario />} /> */}
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/depositos" element={<Depositos />} />
      </Routes>
    </div>
  );
}
export default App;
