import "./App.css";
import Header from "./Header";
import React from "react";
import Sidebar from "./Sidebar";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./UserList";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <div className="app__withHeader">
            <Header />

            <div className="app_sidebar">
              <Sidebar />

              <Route exact path="/userList">
                <UserList />
              </Route>

              <Route exact path="/">
                <Home />
              </Route>
            </div>
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
