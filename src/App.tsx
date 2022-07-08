import React from 'react';
import './index.scss';
import { BrowserRouter as Router} from "react-router-dom";
import {MainRouter} from "./routers/MainRouter";
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import {LocalizationProvider} from "@mui/x-date-pickers";

function App() {
  return (
      <LocalizationProvider dateAdapter={AdapterLuxon}>
          <Router>
              <MainRouter></MainRouter>
          </Router>
      </LocalizationProvider>

  );
}

export default App;
