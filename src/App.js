import "./App.scss";
import Home from "./components/Home";
import axios from "axios";
/* import { Route } from "react-router-dom"; */

axios.defaults.baseURL = "http://localhost:3001";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
