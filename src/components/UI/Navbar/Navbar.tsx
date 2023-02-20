import {NavLink, Link, useNavigate} from "react-router-dom";
import {StyledNavbar} from "./StyledNavbar.styled";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {authSlice} from "../../../features/slices/authSlice";
import {Button} from "@mui/material";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const {isAuthenticated} = useAppSelector(state => state.authReducer);
  const navigate = useNavigate();

  const logoutHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(authSlice.actions.logout());
    navigate('/login');
  };
  return (
    <StyledNavbar >
      <nav>
          <>
            <NavLink to=".">Home</NavLink>
            <NavLink to="products">Products</NavLink>

            <div>
              {
                !isAuthenticated
                  ? <><Link to={'/login'}>Login</Link> <Link to={'/register'}>Registration</Link></>
                  :
                  <>
                    <NavLink to="profile">Profile</NavLink>

                  <Button
                    variant="contained"
                    onClick={logoutHandler}
                    sx={{backgroundColor: '#3ab7f3' ,color: '#fff'}}
                  >Logout</Button>
                  </>
              }
            </div>
          </>
      </nav>
    </StyledNavbar>
  );
};

export default Navbar;