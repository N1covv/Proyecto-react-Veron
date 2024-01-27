import { createContext, useState, useEffect} from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);


    const agregarAlCarrito = (item, cantidad) => {
        const itemAgregado = { ...item, cantidad }
        const nuevoCarrito = [...cart]
        const enElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id)

        if (enElCarrito) {
            enElCarrito.cantidad += cantidad
        } else {
            nuevoCarrito.push(itemAgregado)
        }
        setCart(nuevoCarrito)
        console.log(nuevoCarrito)
    }

    const cantidadEnCarrito = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0);
    }

    const precioTotal = () => {
        return cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    }

    const vaciarCarrito = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, setCart , cantidadEnCarrito, precioTotal, vaciarCarrito, agregarAlCarrito }}>
            {children}
        </CartContext.Provider>
    )
}

