import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/pages/home";
import GifDetail from "./components/pages/detail-page";
import Navbar from "./components/common/navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/detail/:id" exact component={GifDetail} />
        <Route path="/" exact component={Home} />
        <Route render={() => <h2>Not Found</h2>} />
    </Switch>
    </div>
  );
}

export default App;
