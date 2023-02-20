import React, {useState} from 'react';
import Flex from "../../components/Flex";
import {useAppDispatch} from "../../hooks/redux";
import {useNavigate} from "react-router-dom";
import {login, register} from "../../features/ActionCreators";
import {Box, TextField, Typography, Button} from "@mui/material";
import { Link } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isFormValid = () => userName && password;

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(register({firstName: firstName, lastName: lastName, age: age, username: userName, password: password}));
      navigate('/');
    } else {
      alert('Form is invalid!');
    }
  };
  return (
    <Flex justify="center" wrap="wrap" maxWidth="380px" width="100%" margin="25px auto">
      <Box
        display="flex"
        flexDirection={"column"}
        alignItems="center"
        justifyContent={"center"}
        margin="auto"
        padding={"20px"}
        borderRadius={"5px"}
        boxShadow={"5px 5px 10px #ccc"}
        sx={{
          transition: "all 0.3s ease-in-out",
          ":hover": {
            boxShadow: "10px 10px 20px #ccc",
            transition: "all 0.3s ease-in-out",
          }
        }}
      >
      <form style={{width: "100%", textAlign: "center"}} onSubmit={submitHandler}>
          <Typography variant="h3" padding={3} textAlign="center">Registration</Typography>
        <TextField
          onChange={e => setFirstName(e.target.value)}
          type="text"
          value={firstName}
          variant="outlined"
          placeholder="FirstName"
          margin="normal"
          fullWidth
        />
        <TextField
          onChange={e => setLastName(e.target.value)}
          type="text"
          value={lastName}
          variant="outlined"
          placeholder="LastName"
          margin="normal"
          fullWidth
        />
        <TextField
          onChange={e => setAge(Number(e.target.value))}
          type="number"
          value={age}
          InputProps={{ inputProps: { min: 0, max: 100 } }}
          variant="outlined"
          placeholder="Age"
          margin="normal"
          fullWidth
        />
          <TextField
            onChange={e => setUserName(e.target.value)}
            type="text"
            value={userName}
            variant="outlined"
            placeholder="Username"
            margin="normal"
            fullWidth
          />
          <TextField
            type="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
            variant="outlined"
            placeholder="Password"
            margin="normal"
            fullWidth
          />
          <Button type="submit" variant="contained" color="warning" sx={{marginTop: "20px"}}>Sign up</Button>

      </form>

      <Typography sx={{ fontSize: '0.8rem', mt: '1rem', mb: '1rem' }}>
      Already have an account?
      <Link to='/login' style={{color: "#3ab7f3"}}>Login Here</Link>
    </Typography>
    </Box>
    </Flex>
  );
};

export default Register;