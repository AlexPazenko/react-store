import styled, {css} from 'styled-components';
import {IButton} from "../../../models/models";

export const StyledButton = styled.button<IButton>`
  padding: 5px 15px;
  font-size: 14px;
  color: #ddd;
  background: transparent;
  border: 1px solid #ddd;
  transition: all 0.5s ease-in-out;
  margin: ${({margin}) => margin || '0'};
  &:hover {
    cursor: pointer;
    border: 1px solid teal;
    color: teal;
  }
  align-self: ${props => props.align || "stretch"};
  
  ${props => props.primary && css`
      color: ${(props:IButton) => props.color || 'white'};
      background: ${(props:IButton) => props.background || 'white'};
  `}
  ${props => props.outlined && css`
      color: ${(props:IButton) => props.color || 'black'};
      border: 1px solid ${(props:IButton) => props.color || 'black'};
      background: transparent;
  `}
`;
