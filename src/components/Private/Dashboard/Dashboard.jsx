import { useState } from 'react';
import './dashboard.css';

const Dashboard = () => {
  const [data, setData] = useState({
    book_name: '',
    book_image: '',
    book_author: '',
  });
  console.log(data);
  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="container">
      <div className="book_container">
        <h2>Books Available</h2>
        <div>
          <form className="book_form">
            <input
              type="text"
              placeholder="Name"
              name="book_name"
              className="input"
              onChange={handleChange}
            />

            <input
              type="file"
              name="book_image"
              className="input"
              onChange={handleChange}
            />

            <input
              type="text"
              name="book_author"
              placeholder="Title"
              className="input"
              onChange={handleChange}
            />

            <button type="submit" className="btn">
              + Book
            </button>
          </form>
        </div>
      </div>
      <div className="books">
        <h2>BOOKS HERE ...</h2>
      </div>
    </div>
  );
};

export default Dashboard;
