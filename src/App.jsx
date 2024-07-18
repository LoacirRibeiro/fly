import React from "react"
import Navbar from "./componentes/navbar/Navbar"
import Home from "./componentes/home/Home"
import Pesquisar from "./componentes/pesquisar/Pesquisar"
import Suporte from "./componentes/suporte/Suporte"
import Informacao from "./componentes/informacao/Informacao"
import Lounge from "./componentes/lounge/Lounge"
import Viajantes from "./componentes/viajantes/Viajantes"
import Subscribe from "./componentes/subscribe/Subscribe"
import Footer from "./componentes/footer/Footer"

function App() {
   return (
    <div>
      <Navbar />
      <Home />
      <Pesquisar />
      <Suporte />
      <Informacao />
      <Lounge />
      <Viajantes />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default App
