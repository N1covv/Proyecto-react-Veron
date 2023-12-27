import { useState } from 'react'
import { Button } from '@chakra-ui/react'

const ItemCount = () => {

    const [contador, setContador] = useState(0)

    const mostrarMensaje = () => {
        alert(`${contador} Productos agregados al carrito`)
    }

    const restar = () => {
        if (contador > 0){
            setContador(contador - 1)
        }
    }


    return (
        <div>
            < Button colorScheme='teal' size = 'sm' onClick={restar}>
                -
            </Button>

            <Button colorScheme='teal' onClick={mostrarMensaje}>
                Agregar al carrito {contador}
            </Button>

            <Button colorScheme='teal' size = 'sm' onClick={() => setContador(contador + 1)}>
                +
            </Button>
        </div>
    )
}

export default ItemCount