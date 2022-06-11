import React from 'react';
import './index.scss';
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
