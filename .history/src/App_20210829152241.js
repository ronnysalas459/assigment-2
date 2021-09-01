import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PlayersContextProvider from "./contexts/PlayersContext";
import MoviesPopularContextProvider from "./contexts/MoviesPopularContext";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import MoviesPopular from "./components/MoviesPopular";
import Movie from "./components/Players";
import NotFound from "./components/NotFound";
import "./assets/css/styles.css";

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/">
        <MoviesPopularContextProvider>
        </MoviesPopularContextProvider>
      </Route>
      <Route path ="/movies//:playerId">
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
