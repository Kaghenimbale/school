import { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import './signup.css';
import { createUser } from '../../redux/user/userSlice';
import { NavLink } from 'react-router-dom';

const Signup = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: '',
    password: '',
    password_confirmation: '',
  });

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    dispatch(createUser(data));
    setData({
      email: '',
      password: '',
      password_confirmation: '',
    });
    e.preventDefault();
  };
  return (
    <div className="form_container">
      <div className="container">
        <div className="user-icon">
          <AiOutlineUser className="icon-user" />
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <label>
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email:"
              value={data.email}
              onChange={handleChange}
            />
          </label>
          <label>
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Password:"
              value={data.password}
              onChange={handleChange}
            />
          </label>
          <label>
            <input
              className="input"
              type="password"
              name="password_confirmation"
              placeholder="Confirm Password:"
              value={data.password_confirmation}
              onChange={handleChange}
            />
          </label>
          <div className="btn_container">
            <button className="submit_btn" type="submit">
              Create Account
            </button>
            <span className="question">
              <span>Already have an account ?</span>
              <NavLink className="link" to="/">
                Sign in
              </NavLink>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
