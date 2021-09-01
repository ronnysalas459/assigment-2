import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MoviesPopularContextProvider from "./contexts/MoviesContext";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
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
      <Route component = { NotFound }/>
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default App;
