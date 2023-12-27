import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Cart from "./components/Cart"



const App = () => {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route exact path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
        <Route exact path='/producto/:id' element={<ItemDetailContainer/>}/>

      </Routes>
      {/* <ItemListContainer /> */}


    </BrowserRouter>

  )
}

export default App