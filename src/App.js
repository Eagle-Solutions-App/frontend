import "./App.scss";
import Landing from "./components/Landing";
import Productos from "./components/Paneles/Productos";
import Usuarios from "./components/Paneles/Usuarios";
import Depositos from "./components/Paneles/Depositos";
import Empresas from "./components/Paneles/Empresas";
import CreacionProducto from "./components/Creacion/CreacionProducto";
import CreacionDeposito from "./components/Creacion/CreacionDeposito";
import CreacionUsuario from "./components/Creacion/CreacionUsuario";
import EditarProducto from "./components/Edicion/EditarProducto";
import EditarDeposito from "./components/Edicion/EditarDeposito";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />

        {/* *************************** PANELES *************************** */}
        <Route path="/productos" element={<Productos />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/depositos" element={<Depositos />} />
        <Route path="/empresas" element={<Empresas />} />

        {/* *************************** POSTEOS *************************** */}
        <Route path="/producto" element={<CreacionProducto />} />
        <Route path="/createDepositos" element={<CreacionDeposito />} />
        <Route path="/createUsuario" element={<CreacionUsuario />} />

        {/* *************************** EDICIONES *************************** */}
        <Route path="/editarProd/:id" element={<EditarProducto />} />
        <Route path="/editarDepo/:id" element={<EditarDeposito />} />
      </Routes>
    </div>
  );
}
export default App;
