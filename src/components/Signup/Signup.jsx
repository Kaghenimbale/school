import { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import './signup.css';

const Signup = () => {
  const [data, setData] = useState({
    name: '',
    class: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    console.log(data);
    setData({
      name: '',
      class: '',
      email: '',
      password: '',
      confirmPassword: '',
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
              placeholder="Create Password:"
              value={data.password}
              onChange={handleChange}
            />
          </label>
          <label>
            <input
              className="input"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password:"
              value={data.confirmPassword}
              onChange={handleChange}
            />
          </label>
          <div className="btn_container">
            <button className="submit_btn" type="submit">
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
