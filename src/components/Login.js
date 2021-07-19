import { Button } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { provider,auth } from '../firebase';

function Login() {

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithPopup(provider).catch(err=>{
            console.log(err)
        })

    }


    return (
        <LoginContainer>

            <LoginInnerContainer>
                <img src="images/slack.png"></img>

                <h1>This is a slack clone developed by me to showcase my front-end development skills</h1>
                <p></p>

                <Button  onClick={signIn}>Sing in with Google</Button>

            </LoginInnerContainer>
     
            
        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div`

        background-color: #f8f8f8;
        height:100vh;
        display: grid;
        place-items: center;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
const LoginInnerContainer = styled.div`

    padding: 100px;
    text-align:center;
    background-color: white;
    border-radius: 10px;

    >img{
        height:100px;
        object-fit: contain;
    }

    >button{
        margin-top:50px;
        background-color: green;
        padding:12px;
        color: white;
        text-transform:capitalize;
    }

    >button:hover{
        background-color: darkgreen;
    }


`

