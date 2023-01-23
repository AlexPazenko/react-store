import {NavLink} from "react-router-dom";
import {StyledNavbar} from "./StyledNavbar.styled";

const Navbar = () => {
  return (
    <StyledNavbar >
      <nav>
          <>
            <NavLink to=".">Home</NavLink>
            <NavLink to="products">Products</NavLink>
          </>
      </nav>
    </StyledNavbar>
  );
};

export default Navbar;