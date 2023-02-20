import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {ThemeProvider} from "styled-components";
import {Provider} from "react-redux";
import {store} from "./api";
import {BrowserRouter} from "react-router-dom";
import {GlobalStyled} from "./styles/Global.styled";
import {LightTheme} from "./styles/themes/LightTheme.styled";

test('renders learn react link', () => {
  render(
  <React.StrictMode>
    <ThemeProvider theme={LightTheme}>
      <Provider store={store}>
        <GlobalStyled/>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
  );
  const title = screen.getByText(/Home page/i);
  expect(title).toBeInTheDocument();
});
