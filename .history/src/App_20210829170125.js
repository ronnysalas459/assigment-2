import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MoviesContextProvider from "./contexts/MoviesContext";
import SeriesContextProvider from "./contexts/SeriesContext";
import Movies from "./components/Movies";
import Series from "./components/Series";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import NotFound from "./components/NotFound";
import "./assets/css/styles.css";

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/">
        <MoviesContextProvider>
          <Movies />
        </MoviesContextProvider>
      </Route>
      <Route path="/series">
        <SeriesContextProvider>
          <Series />
        </SeriesContextProvider>
      </Route>
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default App;
