import styled from "styled-components";

export const StyledProductItem = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50% - 30px);
  padding: 15px;
  border: 1px solid #f5f5f5;
  margin: 15px;
  transition: all 0.4s ease-in-out 0s;

  &:hover {
    border-color: #fff;
    box-shadow: 0 0 15px 0 rgb(0 0 0 / 20%);
    transition: all 0.4s ease-in-out 0s;

  }
`;