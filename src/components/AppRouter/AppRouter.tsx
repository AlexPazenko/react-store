import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../../pages/Home";
import Products from "../../pages/Products";
import MainLayout from "../../pages/MainLayout";
import ProductPage from "../../pages/ProductPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} >
          <>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductPage />} />
           {/* <Route path="products/:id" element={<ProductIdPage />} />
            <Route path="*" element={<NotFound />}/>*/}
          </>
      </Route>
    </Routes>
  );
};

export default AppRouter;