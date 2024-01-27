import React, { useContext, useEffect, useState } from 'react'
import { Center, Card, Image, Stack, CardBody, Text, CardFooter, Heading, Button, Box, Divider, AbsoluteCenter } from '@chakra-ui/react'
import { CartContext } from './context/CartContext'
import Item from './ItemDetail'
import { Link } from 'react-router-dom'


const Cart = () => {

  const { cart, precioTotal, vaciarCarrito } = useContext(CartContext)

  const [cantidad] = useState([])

  const vaciar = () => {
    vaciarCarrito()
  }


  return (
    <div>
      <Box position='relative' padding='10'>
        <Divider />
        <AbsoluteCenter bg='white' px='4' className="titulocart">
          CARRITO DE COMPRAS
        </AbsoluteCenter>
      </Box>
      {
        cart.map((item) => (
          <div key={item.id}>
            <Card
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              variant='outline'
            >
              <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={item.imagen}
                alt='Caffe Latte'
              />

              <Stack>
                <CardBody>
                  <Heading size='md'>{item.titulo}</Heading>

                  <Text py='2'>
                    Precio: ${item.precio}
                    <div>
                      Precio total: ${item.precio * item.cantidad}
                    </div>
                    Cantidad: {item.cantidad}
                  </Text>
                </CardBody>

                <CardFooter>
                </CardFooter>
              </Stack>
            </Card>
          </div>
        ))
      }


      {
        cart.length > 0 ?
          <>
            <h2 className="total">Precio total: ${precioTotal()} </h2>
            <Button onClick={vaciar} className="vaciar">Vaciar Carrito</Button>

          </> :
          <h2>El carrito se encuentra vacio</h2>
      }

      <Divider />
      <Link to="/pedido/form" className="final">
        <Button colorScheme='whatsapp' size='lg' >
          Finalizar tu compra
        </Button>
      </Link>



    </div>
  )
}

export default Cart