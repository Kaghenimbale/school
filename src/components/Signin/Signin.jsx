import { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';

const Signin = () => {
  const [data, setData] = useState({
    name: '',
    password: '',
  });

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    setData({
      name: '',
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
              type="text"
              name="name"
              placeholder="Username:"
              value={data.name}
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
