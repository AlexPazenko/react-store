import React from 'react';
import {useAppSelector} from "../../hooks/redux";
import {StyledProfile} from "./StyledProfile.styled";
import Flex from "../../components/Flex";

const Profile = () => {
  const {firstName, image} = useAppSelector(state => state.authReducer);
  return (
    <StyledProfile>
      <Flex justify="center" wrap="wrap" maxWidth="500px" width="100%" margin="30px auto">
        <img src={image} alt={firstName}/>
        <span>
        Welcome <strong>{firstName}!</strong> You can view this page
        because you're logged in
      </span>
      </Flex>
    </StyledProfile>
  );
};

export default Profile;