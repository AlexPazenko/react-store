import React from 'react';
import {IFlex} from "../../models/models";
import {StyledFlex} from "./StyledFlex.styled";

const Flex = ({children, ...props}: IFlex) => {
  return (
      <StyledFlex className={props.className} {...props}>{children}</StyledFlex>
  );
};

export default Flex;