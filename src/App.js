import "./App.scss";
import Landing from "./components/Landing";
import Perfil from "./components/Perfil";
import Productos from "./components/Paneles/Productos";
import Usuarios from "./components/Paneles/Usuarios";
import Depositos from "./components/Paneles/Depositos";
import Empresas from "./components/Paneles/Empresas";
import CreacionProducto from "./components/Creacion/CreacionProducto";
import CreacionDeposito from "./components/Creacion/CreacionDeposito";
import CreacionUsuario from "./components/Creacion/CreacionUsuario";
import EditarProducto from "./components/Edicion/EditarProducto";
import EditarDeposito from "./components/Edicion/EditarDeposito";
import Carrito from "./components/Paneles/Carrito";
import UsuariosBloqueados from "./components/Bloqueos/UsuariosBloqueados";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import EmpresasBloqueadas from "./components/Bloqueos/EmpresasBloqueadas";
/* import { useSelector } from "react-redux"; */

//axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.baseURL = "https://backeagle.onrender.com";

function App() {
  /* const userActual = useSelector((state) => state.userActual); */

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/carrito" element={<Carrito />} />

        <Route path="/productos" element={<Productos />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/depositos" element={<Depositos />} />
        {/* {userActual.Rol.id === 3 (
            <Route path="/depositos" element={<Depositos />} />
          ))} */}

        <Route path="/empresas" element={<Empresas />} />
        <Route path="/usuariosBloqueados" element={<UsuariosBloqueados />} />
        <Route path="/empresasBloqueadas" element={<EmpresasBloqueadas />} />

        <Route path="/producto" element={<CreacionProducto />} />
        <Route path="/createDepositos" element={<CreacionDeposito />} />
        <Route path="/createUsuario" element={<CreacionUsuario />} />

        <Route path="/editarProd/:id" element={<EditarProducto />} />
        <Route path="/editarDepo/:id" element={<EditarDeposito />} />
      </Routes>
    </div>
  );
}
export default App;
