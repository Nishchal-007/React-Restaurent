import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "./Components/Home";
import DishDetails from "./Components/DishDetails";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/:variety">
                        <DishDetails />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
