import {IButton} from "../../../models/models";
import {StyledButton} from "./StyledButton.styled";

const Button = ({children, ...props}: IButton) => {
    return (
            <StyledButton {...props}>{children}</StyledButton>
    );
};

export default Button;