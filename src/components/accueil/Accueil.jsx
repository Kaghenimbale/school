import { NavLink } from 'react-router-dom';
import './Accueil.css';

const Accueil = () => {
  return (
    <div className="accueil">
      <h1>&lt;/MANAGMENT.&gt;</h1>
      <div className="btns">
        <NavLink className="btn" to="signup">
          SIGN UP
        </NavLink>
        <NavLink className="btn" to="signin">
          SIGN IN
        </NavLink>
      </div>
    </div>
  );
};

export default Accueil;
