import { useState, useContext, useRef, useEffect} from 'react';
import axios from 'axios';
import { AuthContext } from '../Context/AuthContextProvider';
import { useNavigate } from 'react-router-dom';
import {Button, Container, Input} from "@chakra-ui/react";

export default function Login(){
    const navigate = useNavigate();
;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const inputRef = useRef(null);

    const handleFocus = () =>{
        inputRef.current.focus();
    }

    const { login, authDetails:{isLoggedIn}} = useContext(AuthContext);

    const handleClick = async() =>{
        try {
            let res = await axios({
                method: 'post',
                url: 'https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login',
                data: {
                    email,
                    password
                }
            })

            login(res?.data?.token);
        } catch (error) {
            console.log(error);
        }

        if(isLoggedIn){
            // return <Navigate to='/' />;
            // console.log('Succesfull login')
            navigate('/')
        }
    }

    useEffect(() => {
        handleFocus();
    }, []);


    return(
        <Container>
            <Input type='email' ref={inputRef} value={email} placeholder='Enter Your Email' onChange={(e)=>setEmail(e.target.value)}  onClick={handleFocus} />
            <Input type='password' value={password} placeholder='Enter Your Password' onChange={(e)=>setPassword(e.target.value)}/>
            <Button onClick={handleClick}>Login</Button>
            <p>!After Succesful Login you have to Click on Home button</p>
            <p style={{fontSize:'10px'}}>I got little bit confuse on params. but still tried it. </p>
        </Container>
    )
}