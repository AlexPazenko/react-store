import styled, {css, keyframes} from 'styled-components';
import {IMyBtn} from "../../../models/models";



export const StyledMyBtn = styled.button<IMyBtn>`
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
      color: ${(props:IMyBtn) => props.color || 'white'};
      background: ${(props:IMyBtn) => props.background || 'white'};
  `}
  ${props => props.outlined && css`
      color: ${(props:IMyBtn) => props.color || 'black'};
      border: 1px solid ${(props:IMyBtn) => props.color || 'black'};
      background: transparent;
  `}
`;
