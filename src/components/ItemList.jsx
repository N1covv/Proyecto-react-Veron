import React from 'react'
import Item from './Item'
import { Flex } from '@chakra-ui/react'

const ItemList = ({ productos }) => {
  return (
    <div>
      {
        productos.map((p) => {
          return (

              <Item
                key={p.id}
                imagen={p.imagen}
                titulo={p.titulo}
                descripcion={p.descripcion}
                precio={p.precio}
                id={p.id}
              />
          )
        })
      }
    </div>
  )
}

export default ItemList