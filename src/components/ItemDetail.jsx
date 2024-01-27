import { useParams } from 'react-router-dom'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Flex, Image } from '@chakra-ui/react'
import ItemCount from './ItemCount'

const Item = ({ item }) => {



    return (
        <Flex align="center" justify="center" >
        <Card maxW='sm'>
            <CardBody >
                <Image
                    src={`${item.imagen}`}
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{`${item.titulo}`}</Heading>
                    <Text>
                        {item.descripcion}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        ${item.precio}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <ItemCount item= {item}/>
                </ButtonGroup>
            </CardFooter>
        </Card>
        </Flex>
    )
}

export default Item