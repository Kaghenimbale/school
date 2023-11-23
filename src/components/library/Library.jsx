import { useState } from 'react';
import './library.css';

const Library = () => {
  const [data, setData] = useState({
    Student_name: '',
    Book_title: '',
    Book_id: '',
    Student_class: '',
    Date_taken: '',
    Time: '',
    Librarian_name: '',
    Librarian_phone_number: '',
  });
  const handleChange = (e) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = (e) => {
    console.log(data);
    setData({
      Student_name: '',
      Book_title: '',
      Book_id: '',
      Student_class: '',
      Date_taken: '',
      Time: '',
      Librarian_name: '',
      Librarian_phone_number: '',
    });
    e.preventDefault();
  };
  return (
    <div className="library">
      <h2>LIBRARY BOOKS MANAGMENT</h2>
      <div>
        <form className="forms" onSubmit={handleSubmit}>
          <label htmlFor="">
            <input
              type="text"
              className="input_library"
              name="Student_name"
              placeholder="Student Name"
              required
              onChange={handleChange}
            />
          </label>

          <label htmlFor="">
            <input
              type="text"
              className="input_library"
              name="Book_title"
              placeholder="Book Title"
              required
              onChange={handleChange}
            />
          </label>

          <label htmlFor="">
            <input
              type="text"
              className="input_library"
              name="Book_id"
              placeholder="Book ID"
              required
              onChange={handleChange}
            />
          </label>
          <label htmlFor="">
            <input
              type="text"
              className="input_library"
              name="Student_class"
              placeholder="Student Class"
              required
              onChange={handleChange}
            />
          </label>
          <label htmlFor="">
            <input
              type="date"
              className="input_library"
              name="Date_taken"
              placeholder="Date"
              required
              onChange={handleChange}
            />
          </label>
          <label htmlFor="">
            <input
              type="time"
              className="input_library"
              name="Time"
              placeholder="Time"
              required
              onChange={handleChange}
            />
          </label>
          <label htmlFor="">
            <input
              type="text"
              className="input_library"
              name="Librarian_name"
              placeholder="Librarian Name"
              required
              onChange={handleChange}
            />
          </label>

          <label htmlFor="">
            <input
              type="tel"
              className="input_library"
              name="Librarian_phone_number"
              placeholder="Librarian Phone Number"
              required
              onChange={handleChange}
            />
          </label>
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </div>
      <div className="historics"></div>
    </div>
  );
};

export default Library;
