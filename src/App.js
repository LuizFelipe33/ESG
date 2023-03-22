import { BrowserRouter, Route, Routes } from "react-router-dom";
import Consultoria from "./paginas/Consultoria";
import Cursos from "./paginas/Cursos";
import Home from "./paginas/Home";
import './assets/css/global.css'
import Login from "./paginas/Login";
import TemaProvider from "./contexts/TemaContexts";

const App = () => {
  return (
    <TemaProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/consultoria" element={<Consultoria />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
    </TemaProvider>
  );
}

export default App;
