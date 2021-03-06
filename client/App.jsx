import React, { Fragment } from "react";
import "./app.css";
import Navbar from "./components/navbar";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Route path="/" exact component={Home} />
    </Fragment>
  );
};

export default App;
