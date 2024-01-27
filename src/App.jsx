import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Cart from "./components/Cart"
import Form from "./components/Form"
import { CartProvider } from "./components/context/CartContext"


const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route path='/' element={<ItemListContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route exact path='/categoria/:categoriaId' element={<ItemListContainer />} />
          <Route exact path='/producto/:id' element={<ItemDetailContainer />} />
          <Route exact path='/pedido/form' element={<Form />} />


        </Routes>
        {/* <ItemListContainer /> */}

      </BrowserRouter>
    </CartProvider>


  )
}

export default App