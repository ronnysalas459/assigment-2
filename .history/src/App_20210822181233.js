import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PlayersContextProvider from "./contexts/PlayersContext";
import TeamsContextProvider from "./contexts/TeamsContext";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import Teams from "./components/Teams";
import Players from "./components/Players";
import NotFound from "./components/NotFound";
import "./assets/css/styles.css";

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/">
        <TeamsContextProvider>
          <Teams />
        </TeamsContextProvider>
      </Route>
      <Route path ="/players/player/:playerId">
        <PlayersContextProvider>
          <Players/>
        </PlayersContextProvider>
      </Route>
      <Route component = { NotFound }/>
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default App;
