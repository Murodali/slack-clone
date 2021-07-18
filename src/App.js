import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import styled from "styled-components";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <Router>
        <Header></Header>

        <AppBody>
          <SideBar></SideBar>
          <Switch>
            <Route exact path="/"></Route>
          </Switch>
        </AppBody>
      </Router>
    </>
  );
}

export default App;

const AppBody = styled.div`

  display: flex;
  height: 100vh;
  

`;
