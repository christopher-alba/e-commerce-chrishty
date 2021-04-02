import React, { Fragment } from "react";
import "./app.css";
import Navbar from "./components/navbar";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import MainModalForm from "./components/MainModalForm";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/shop" exact component={Shop} />
      <MainModalForm />
    </Fragment>
  );
};

export default App;
