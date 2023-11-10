import './navbar.css';
import { NavLink } from 'react-router-dom';
import { FaSchool } from 'react-icons/fa';

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
  return (
    <div className="navbar">
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
  );
};

export default Navbar;
