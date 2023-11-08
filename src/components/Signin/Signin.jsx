import { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../redux/user/userSlice';

const Signin = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    dispatch(fetchUser(data));
    setData({
      email: '',
      password: '',
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
              placeholder="Username:"
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
          <div className="btn_container">
            <button className="submit_btn" type="submit">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
