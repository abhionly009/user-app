import "./App.css";
import Header from "./Header";
import React from "react";
import Sidebar from "./Sidebar";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./UserList";
import LandingPage from "./LandingPage";
import Product from "./Product";
import Country from "./Country";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <LandingPage />
          </Route>

          <div className="app__withHeader">
            <Header />

            <div className="app_sidebar">
              <Sidebar />

              <Route path="/userList">
                <UserList />
              </Route>

              <Route path="/product">
                <Product />
              </Route>

              <Route path="/country">
                <Country />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
            </div>
          </div>

          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
