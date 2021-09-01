import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MoviesContextProvider from "./contexts/MoviesContext";
import DetailsContextProvider from "./contexts/DetailsContext";
import Movies from "./components/Movies";
import Details from "./components/Details";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import NotFound from "./components/NotFound";
import "./assets/css/styles.css";
import SideBar from "./components/Common/SideBar";

const App = () => (
  <BrowserRouter>
    <Header />
    <SideBar/>
    <Switch>
      <Route exact path="/">
        <MoviesContextProvider>
          <Movies />
        </MoviesContextProvider>
      </Route>
      <Route path="/movie/movie_id">
        <DetailsContextProvider>
          <Details />
        </DetailsContextProvider>
      </Route>
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default App;
