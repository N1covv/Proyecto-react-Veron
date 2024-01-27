import React from 'react'
import { useContext } from 'react'
import { AiOutlineShopping } from "react-icons/ai";
import { CartContext } from './context/CartContext';


const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext)

    return (
        <>
            < AiOutlineShopping />
            <span>
                {cantidadEnCarrito()} </span>
        </>
    )
}

export default CartWidget