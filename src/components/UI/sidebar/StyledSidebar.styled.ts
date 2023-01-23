import styled from "styled-components";

export const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
  border: 1px solid #e5e7f2;
  transition: all 0.4s ease-in-out 0s;

  &:hover {

  }
  
  ul {
    margin: 20px 0;
    li {
      list-style: none;
      margin-bottom: 7px;
      cursor: pointer;
    }
  }
`;