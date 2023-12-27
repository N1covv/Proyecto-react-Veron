import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Image } from '@chakra-ui/react'
import ItemCount from './ItemCount'

const Item = ({ producto }) => {

    return (
        <Card maxW='sm'>
            <CardBody>
                <Image
                    src={producto.img}
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{producto.titulo}</Heading>
                    <Text>
                        {producto.descripcion}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        ${producto.precio}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <ItemCount />
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default Item