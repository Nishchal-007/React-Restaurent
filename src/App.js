import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

import { Home } from "./Components/Home";

function App() {
    return (
        <div className="App">
            <Home />
        </div>
    );
}

export default App;
