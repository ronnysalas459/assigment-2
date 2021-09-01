import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PlayersContextProvider from "./contexts/PlayersContext";
import TeamsContextProvider from "./contexts/TeamsContext";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import Teams from "./components/Teams";
import Players from "./components/Players"
import NotFound from "./components/NotFound";

import "./assets/css/styles.css";
import Footer from "./components/Common/Footer";

const App = () => (
  <BrowserRouter>
    <Header />


    <Footer/>
  </BrowserRouter>

);

export default App;
