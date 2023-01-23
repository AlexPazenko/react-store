import React from 'react';
import {render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../store";
import {BrowserRouter} from "react-router-dom";
import Products from "../pages/Products";


describe('Product list tests', () => {

test('Products found test', async() => {
  render(
        <Provider store={store}>
          <BrowserRouter>
            <Products  />
          </BrowserRouter>
        </Provider>
  );

  //expect(await screen.findByText('Products were found: ')).toBeVisible();
  await (screen.findByText('Electronics'));
});
});
