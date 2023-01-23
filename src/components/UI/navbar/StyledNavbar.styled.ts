import styled from "styled-components";

export const StyledNavbar = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  background: lightgray;
  justify-content: center;
  nav {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 15px;
    background: lightgray;
    justify-content: flex-end;
    a {
      margin-right: 20px;
      color: #000000;
      text-decoration: none;
    }
  }
`;