import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div>

            <Flex backgroundColor='#1B2021' color='white'>

                <Link to='/'>
                    <Box p='4'
                        border='1px' borderColor='beige'
                        borderRadius="5px  ">
                        ShadyCommerce
                    </Box>

                </Link>

                <Spacer />
                <Menu>
                    <MenuButton p={3} border='1px' borderColor='beige'
                        borderRadius="5px  ">
                        Productos
                    </MenuButton>
                    <MenuList backgroundColor='#1B2021'>

                        <Link to={'/categoria/remeras'}>
                            <MenuItem color='black'>Remeras</MenuItem>
                        </Link>
                        <Link to={'/categoria/gorras'}>
                            <MenuItem color='black'>Gorras</MenuItem>
                        </Link>
                        <Link to={'/categoria/zapatillas'}>
                            <MenuItem color='black'>Zapatillas</MenuItem>
                        </Link>
                    </MenuList>
                </Menu>

                <Link to={'./cart'}>
                    <Box p='5' border='1px' borderColor='beige'
                        borderRadius="5px  ">
                        <CartWidget />
                    </Box>
                </Link>

            </Flex>

        </div>
    )
}

export default Navbar