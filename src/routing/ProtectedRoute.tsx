import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import {useAppSelector} from "../hooks/redux";

const ProtectedRoute = () => {
  const {isAuthenticated} = useAppSelector(state => state.authReducer);

  // show unauthorized screen if no user is found in redux store
  if (!isAuthenticated) {
    return (
      <div className='unauthorized'>
        <h1>Unauthorized :(</h1>
        <span>
          <NavLink to='/login'>Login</NavLink> to gain access
        </span>
      </div>
    );
  }

  // returns child route elements
  return <Outlet />;
};
export default ProtectedRoute;