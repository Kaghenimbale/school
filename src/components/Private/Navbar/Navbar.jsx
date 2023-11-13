import './navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { FaSchool } from 'react-icons/fa';
import { logoutUser } from '../../../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import { BsBoxArrowInLeft } from 'react-icons/bs';
import { RxDashboard } from 'react-icons/rx';
import { HiUsers } from 'react-icons/hi';
import { RiProjectorFill } from 'react-icons/ri';
import { BiSolidUserRectangle } from 'react-icons/bi';
import { HiMiniUserPlus } from 'react-icons/hi2';
import { MdOutlinePayment } from 'react-icons/md';
import { RiSettings3Fill } from 'react-icons/ri';
import PropTypes from 'prop-types';

const Icon = ({ icon: IconComponent, title }) => (
  <div className="navlink">
    <IconComponent className="icon" />
    <span className="title">{title}</span>
  </div>
);

Icon.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
};

const Navbar = () => {
  const navbars = [
    {
      title: 'Dashboard',
      icon: RxDashboard,
    },
    {
      title: 'Students',
      icon: HiUsers,
    },
    {
      title: 'Courses',
      icon: RiProjectorFill,
    },
    {
      title: 'Teachers',
      icon: BiSolidUserRectangle,
    },
    {
      title: 'Attendances',
      icon: HiMiniUserPlus,
    },
    {
      title: 'Payment',
      icon: MdOutlinePayment,
    },
    {
      title: 'Settings',
      icon: RiSettings3Fill,
    },
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
        <Link to="/" className="navlink">
          <h2 className="title">
            <FaSchool className="icon" /> &lt;/MANAGMENT.&gt;
          </h2>
        </Link>
        <ul className="navlinks">
          {navbars.map((navbar, index) => {
            return (
              <NavLink
                className="navlink"
                to={
                  navbar.title.toLowerCase() === 'dashboard'
                    ? '/'
                    : navbar.title.toLowerCase()
                }
                key={navbar.title}
              >
                <Icon key={index} icon={navbar.icon} title={navbar.title} />
              </NavLink>
            );
          })}
        </ul>
      </div>
      <button className="btn" type="button" onClick={handleLogout}>
        <BsBoxArrowInLeft />
        Logout
      </button>
    </div>
  );
};

export default Navbar;
