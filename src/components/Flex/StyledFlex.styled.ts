import styled from "styled-components";
import {IFlex} from "../../models/models";

export const StyledFlex = styled.div<IFlex>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  flex-wrap: ${props => props.wrap || 'inherit'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'stretch'};
  margin: ${({margin}) => margin || '0'};
  max-width: ${({maxWidth}) => maxWidth || 'unset'};
  width: ${({width}) => width || 'auto'};
`;