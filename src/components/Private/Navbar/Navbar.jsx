import './navbar.css';
import { NavLink } from 'react-router-dom';
import { FaSchool } from 'react-icons/fa';
import { logoutUser } from '../../../redux/user/userSlice';
import { useDispatch } from 'react-redux';

const Navbar = () => {
  const navbars = [
    'Dashboard',
    'Students',
    'Courses',
    'Teachers',
    'Attendances',
    'Payment',
    'Settings',
  ];
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem('user');
    localStorage.removeItem('userInfo');
    window.location.reload();
  };
  return (
    <div className="navbar">
      <div className="nav-container">
        <h2>
          <FaSchool className="icon" /> Management
        </h2>
        <ul className="navlinks">
          {navbars.map((navbar) => {
            return (
              <NavLink className="navlink" key={navbar}>
                {navbar}
              </NavLink>
            );
          })}
        </ul>
      </div>
      <button className="btn" type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Navbar;
