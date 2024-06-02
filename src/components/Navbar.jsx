import { Link } from 'react-router-dom';
import { Flex, Spacer, Box, Heading, ButtonGroup, Button } from '@chakra-ui/react'

const links = [
    {
        to: '/',
        label: 'HOME',
    },
    {
        to: '/login',
        label: 'LOGIN',
    },
]

export default function Navbar(){
    return(
        <>
            <Flex minWidth='max-content' alignItems='center' gap='2'>
                <Box p='2'>
                    <Heading size='md'>E-Commerce Website</Heading>
                </Box>
                <Spacer />
                <ButtonGroup gap='2'>
                    {links?.map((link)=>(
                        
                            <Button key={link.to} >
                                <Link to={link.to} >{link.label}</Link>
                            </Button>
                        
                    ))}
                </ButtonGroup>
            </Flex>
        </>
    )
}