import { useContext, useState } from 'react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { CartContext } from './context/CartContext'

const Form = () => {

  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [telefono, setTelefono] = useState("")
  const [pedidoId, setPedidoId] = useState("")

  const { cart, precioTotal, vaciarCarrito } = useContext(CartContext)
  const db = getFirestore()
  const ordersCollection = collection(db, 'pedidos')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const pedido  = {
      usuario: {nombre, email, telefono},
      productos: cart,
      total: precioTotal()
    }

    addDoc(ordersCollection, pedido)
    .then((doc) =>{
      setPedidoId(doc.id)
      vaciarCarrito()
    })
  }

  if( pedidoId) {
    return(
      <div>
        <h1>Tu compra ha resultado exitosa!</h1>
        <p>Tu numero de compra es : {pedidoId} </p>
      </div>
    )
  }



  return (
    <div>
      <h1 className="compl">
        Completa este formulario con tus datos para registrar la compra! 
      </h1>
      <form action="" onSubmit={handleSubmit} className="formulario">
        <input type="text" placeholder='Ingrese tu Nombre y Apellido..' onChange={(e) => setNombre(e.target.value)} value={nombre} />
        <input type="email" placeholder='Ingrese tu Email..' onChange={(e) => setEmail(e.target.value)} value={email} />
        <input type="phone" placeholder='Ingrese tu Telefono..' onChange={(e) => setTelefono(e.target.value)} value={telefono}/>
        <button type='submit'>Finalizar compra</button>
      </form>
    </div>
    
  )
}

export default Form