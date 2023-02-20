import React from "react";
import "./App.css";
import styled from "styled-components";
import {Route, Routes} from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ProtectedRoute from "./routing/ProtectedRoute";
import Register from "./pages/Register";

const AppWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

function App() {
  return (
      <AppWrapper>
        <Routes>
          <Route path="/" element={<MainLayout />} >
            <>
              <Route index element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route path="products/:id" element={<Product />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />

              <Route element={<ProtectedRoute />}>
                <Route path='/profile' element={<Profile />} />
              </Route>
              <Route path="*" element={<NotFound />}/>
            </>
          </Route>
        </Routes>

      </AppWrapper>
  );
}

export default App;