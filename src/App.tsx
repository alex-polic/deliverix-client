import React from 'react';
import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import {MainRouter} from "./routers/MainRouter";

function App() {
  return (
      <Router>
          <MainRouter></MainRouter>
      </Router>
  );
}

export default App;
