import { Avatar, Button } from "@material-ui/core";
import { AccessTime, Help, Search } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from "../firebase";



function Header() {
  const [user,loading] = useAuthState(auth);

  const singOut =(e) => {
    e.preventDefault();

    auth.signOut().then(() => {
    }).catch((err) => {
      console.log(err)
    });
  }

  return (
    <HeaderContainer className="header">
      <HeaderLeft>

          <HeaderAvatar
          src={user?.photoURL}
          />
        <AccessTime></AccessTime>
      </HeaderLeft>

      <HeaderSearch>
          <Search></Search>
          <input type="text" placeholder="search"></input>
      </HeaderSearch>

      <HeaderRight>
          <Help></Help>
          <Button onClick={singOut} >Sing Out</Button>
      </HeaderRight>

    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
display:flex;
position: fixed;
width:100%;
align-items: center;
justify-content: space-beetwen;
padding: 10px 0;
color:white;
background-color: var(--slack-color);

`;

const HeaderLeft = styled.div`
flex:0.3;
display:flex;
align-items:center;
margin-left:20px;

>.MuiSvgIcon-root{
    margin-left: auto;
    margin-right: 30px;
}

`;

const HeaderAvatar = styled(Avatar)`
cursor: pointer;
:hover{
    opacity: 0.8;
}
`;

const HeaderSearch = styled.div`

    display: flex;
    flex: 0.4;
    opacity: 1;
    border-radius: 6px;
    background-color: #421f44;
    text-align: center;
    padding: 0 50px;
    color: grey;
    border: 1px gray solid;

    >input{
        background-color: transparent;
        border: none;
        text-align: center;
        min-width: 30vw;
        outline:0;
        color: white;

    }

`;

const HeaderRight = styled.div`
    display:flex;
    flex:0.3;
    text-align: end;
    margin-right: 20px;
    margin-left: auto;
    justify-content: flex-end;
    align-items: center;

    > button{
      color: purple;
      background-color: white;
      margin: 0 5px;
      text-transform: capitalize;

    }

    >button:hover{
      background-color: whitesmoke;
     
    }
`;