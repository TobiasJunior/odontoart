import React from "react";
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import ScrolltoTop from "./components/ScrolltoTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import SobrePage from "./pages/SobrePage";
import ServicosPage from "./pages/ServicosPage";
import AgendaPage from "./pages/AgendaPage"
import Contacto from "./pages/Contacto";


function App() {
  return (
<BrowserRouter future={{ V7_startTransition:true}}>

      <ScrolltoTop/>
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/servicos" element={<ServicosPage />} />
        <Route path="/agenda" element={<AgendaPage/>}/>
        <Route path="/contacto" element={<Contacto/>} />
      </Routes>
      <Footer />
    </div>

</BrowserRouter>
  );
}

export default App;
