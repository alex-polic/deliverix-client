import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.scss';
import { theme } from "./styles/themes/mainTheme"
import {ThemeProvider} from "@mui/material";
import axios, {AxiosResponse} from "axios";
import {logout} from "./store/auth/authSlice";

const container = document.getElementById('root')!;
const root = createRoot(container);

interceptor(store);

root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <Provider store={store}>
              <App />
          </Provider>
      </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function interceptor(store: any) {
    axios.interceptors.response.use(
        (next: AxiosResponse) => Promise.resolve(next),
        (error) => {
            console.log(error)
            if(error.response.status === 401 || error.response.status == 403)
                store.dispatch(logout());
        }
        );
}
