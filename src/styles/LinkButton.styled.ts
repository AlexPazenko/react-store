import styled from "styled-components";
import {Link} from "react-router-dom";
import {IButton} from "../models/models";

export const LinkButton = styled(Link)<IButton>`
  padding: 5px 15px;
  font-size: 14px;
  color: black;
  background: transparent;
  border: 1px solid black;
  transition: all 0.5s ease-in-out;
  text-decoration: none;
  margin: ${({margin}) => margin || '0'};
  &:hover {
    cursor: pointer;
    border: 1px solid teal;
    color: teal;
  }
`;