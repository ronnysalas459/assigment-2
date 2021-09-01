import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MoviesContextProvider from "./contexts/MoviesContext";
import Movies from "./components/Movies";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import NotFound from "./components/NotFound";
import "./assets/css/styles.css";
import MoviesContext from "./contexts/MoviesContext";

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/">
        <MoviesContextProvider>

        <Movies />
        </MoviesContextProvider>
      </Route>
      <Route component = { NotFound }/>
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default App;
