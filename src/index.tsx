import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from "styled-components";
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {GlobalStyled} from "./styles/Global.styled";
import {LightTheme} from "./styles/themes/LightTheme.styled";
import {store} from "./api";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

    <ThemeProvider theme={LightTheme}>
      <Provider store={store}>
        <GlobalStyled/>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
