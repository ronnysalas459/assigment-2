import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MoviesContextProvider from "./contexts/MoviesContext";
import DetailsContextProvider from "./contexts/DetailsContext";
import Films from "./components/Films";
import Details from "./components/Details";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import SideBar from "./components/Common/SideBar";
import NotFound from "./components/NotFound";
import "./assets/css/styles.css";

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <div className="content">
        <SideBar />

          <Switch>
            <Route exact path="/">
              <MoviesContextProvider>
                <Films />
              </MoviesContextProvider>
            </Route>
            <Route path="/movie/movie_id">
              <DetailsContextProvider>
                <Details />
              </DetailsContextProvider>
            </Route>
            <Route component={NotFound} />
          </Switch>

      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
