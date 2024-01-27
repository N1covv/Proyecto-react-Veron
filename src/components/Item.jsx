import React from 'react'
import { Card, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Button, Image, Box} from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

const Item = ({ titulo, id, imagen }) => {
    return (

        <div className="tarjetas">
        <Card maxW='sm' className="cards">
            <CardBody>
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{titulo}</Heading>
                </Stack>
                <Image
                    src={`${imagen}`}
                    borderRadius='lg'
                />
            </CardBody>
            
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Link to ={`/producto/${id}`}>
                        <Button> Ver producto</Button>
                    </Link>

                </ButtonGroup>
            </CardFooter>
        </Card>
        </div>
        
    )
}

export default Item