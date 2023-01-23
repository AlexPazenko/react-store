import {IMyBtn} from "../../../models/models";
import {StyledMyBtn} from "./StyledMyBtn.styled";

const MyBtn = ({children, ...props}: IMyBtn) => {
    return (
            <StyledMyBtn {...props}>{children}</StyledMyBtn>
    );
};

export default MyBtn;