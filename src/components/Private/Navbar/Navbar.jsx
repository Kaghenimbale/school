import './navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { FaSchool } from 'react-icons/fa';
import { logoutUser } from '../../../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { BsBoxArrowInLeft } from 'react-icons/bs';
import { RxDashboard } from 'react-icons/rx';
import { HiUsers } from 'react-icons/hi';
import { RiProjectorFill } from 'react-icons/ri';
import { BiSolidUserRectangle } from 'react-icons/bi';
import { HiMiniUserPlus } from 'react-icons/hi2';
import { MdOutlinePayment } from 'react-icons/md';
import { RiSettings3Fill } from 'react-icons/ri';
import { LuMenu } from 'react-icons/lu';
import PropTypes from 'prop-types';
import { navOpener } from '../../../redux/navSlice';

const Icon = ({ icon: IconComponent, title, openNav }) => (
  <div className="navlink">
    <IconComponent className="icon" />
    <span className={openNav ? 'title_1' : 'hidden'}>{title}</span>
  </div>
);

Icon.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  openNav: PropTypes.bool.isRequired,
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
  const openNav = useSelector((state) => state.navOpen.openNav);
  // const [openNav, setOpenNav] = useState(false);

  // const handleClickOutsideTheNavbar = (e) => {
  //   if (
  //     open &&
  //     !e.target.closest('.navbar') &&
  //     !e.target.closest('.menu_container')
  //   ) {
  //     setOpenNav(false);
  //   }
  // };

  // document.addEventListener('click', handleClickOutsideTheNavbar);

  const renderMenu = () => {
    dispatch(navOpener());
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem('user');
    localStorage.removeItem('userInfo');
    window.location.reload();
  };
  return (
    <div id="navbar" className={openNav ? 'navbar' : 'navbar_small'}>
      <button
        type="button"
        className={openNav ? 'menu_container' : 'menu_container_hidden'}
        onClick={renderMenu}
      >
        <LuMenu className="menu" />
      </button>
      <div className="nav-container">
        <Link to="/" className="navlink">
          <h2 className="title">
            <FaSchool className="icon" />
            <p className={openNav ? 'logo' : 'hidden'}>&lt;/MANAGMENT.&gt;</p>
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
                <Icon
                  key={index}
                  icon={navbar.icon}
                  title={navbar.title}
                  openNav={openNav}
                />
              </NavLink>
            );
          })}
        </ul>
      </div>
      <button className="nav_btn" type="button" onClick={handleLogout}>
        <BsBoxArrowInLeft className="icon" />
        <p className={openNav ? 'logout' : 'hidden'}>Logout</p>
      </button>
    </div>
  );
};

export default Navbar;
