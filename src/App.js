import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import styled from "styled-components";
import SideBar from "./components/SideBar";
import Chat from "./components/Chat";
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from "./firebase";
import Login from "./components/Login";
import Spinner from 'react-spinkit';

function App() {

  const [user,loading] = useAuthState(auth);

  if(loading){
    return(
      <Apploading>
        <ApploadingContent>
        <img src="images/slack.png"></img>

        <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none"/>
        </ApploadingContent>
      </Apploading>
    )
  }

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ): (
          <>
          <Header></Header>
  
          <AppBody>
            <SideBar></SideBar>
            <Switch>
              <Route exact path="/">
  
                <Chat/>
                
                </Route>
            </Switch>
          </AppBody>
          </>
        )}
       
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`

  display: flex;
  height: 100vh;
  

`;

const Apploading = styled.div`



`;
const ApploadingContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align:center;
  height: 100vh;

    >img{
        height:100px;
        object-fit: contain;
        margin-bottom: 50px;
       
    }
`;