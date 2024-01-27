import { useState, useContext } from 'react'
import { Button } from '@chakra-ui/react'
import { CartContext } from './context/CartContext'

const ItemCount = ( {item}) => {

    const [cantidad, setCantidad] = useState(1)

    const { cart, agregarAlCarrito } = useContext(CartContext)


    const sumar = () => {
        if (cantidad < 10) {
            setCantidad(cantidad + 1)
        }
    }

    const restar = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1)
        }
    }

    return (
        <div>
            < Button colorScheme='teal' size='sm' onClick={restar}>
                -
            </Button>

            <Button colorScheme='teal' onClick={() => {agregarAlCarrito(item, cantidad)}}>
                Agregar al carrito {cantidad}
            </Button>

            <Button colorScheme='teal' size='sm' onClick={sumar}>
                +
            </Button>
        </div>
    )
}

export default ItemCount