import React from 'react';
import './App.css';
import styled from "styled-components";
import AppRouter from "./components/AppRouter/AppRouter";

const AppWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

function App() {
  return (
      <AppWrapper>
        <AppRouter/>
      </AppWrapper>
  );
}

export default App;
