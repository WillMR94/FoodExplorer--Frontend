import { Routes,Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Prato } from "../pages/Prato";
import { Editar } from "../pages/Editar"
import { Adicionar } from "../pages/Adicionar"



export function AppRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Adicionar" element={<Adicionar/>}/>
      <Route path="/Prato/:id" element={<Prato/>}/>
      <Route path="/edit/:id" element={<Editar/>}/>

    </Routes>


  )
}