import { useEffect, useState } from 'react';
import './library.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, postBook } from '../../redux/bookSlice';
import { BounceLoader } from 'react-spinners';
import { FaTrashAlt } from 'react-icons/fa';
import { FaRegEdit } from 'react-icons/fa';

const Library = () => {
  const { books, isLoading, isFetched, err } = useSelector(
    (state) => state.books,
  );
  const dispatch = useDispatch();

  console.log(books, isLoading, isFetched, err);

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
    e.preventDefault();

    dispatch(postBook(data));

    dispatch(fetchBooks());

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
  };
  useEffect(() => {
    if (!isFetched) {
      dispatch(fetchBooks());
    }

    if (isLoading && isFetched) {
      dispatch(fetchBooks());
    }
  }, [dispatch, isLoading, isFetched]);
  return (
    <div className="library">
      <h2>LIBRARY BOOKS MANAGMENT</h2>
      <div className="books">
        <div>
          <form className="forms" onSubmit={handleSubmit}>
            <label htmlFor="">
              <input
                type="text"
                className="input_library"
                name="Student_name"
                placeholder="Student Name"
                value={data.Student_name}
                required
                onChange={handleChange}
              />
            </label>

            <label htmlFor="">
              <input
                type="text"
                className="input_library"
                name="Book_title"
                value={data.Book_title}
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
                value={data.Book_id}
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
                value={data.Student_class}
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
                value={data.Date_taken}
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
                value={data.Time}
                required
                onChange={handleChange}
              />
            </label>
            <label htmlFor="">
              <input
                type="text"
                className="input_library"
                name="Librarian_name"
                value={data.Librarian_name}
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
                value={data.Librarian_phone_number}
                required
                onChange={handleChange}
              />
            </label>
            <button type="submit" className="btn">
              submit
            </button>
          </form>
        </div>
        <div className="table_container">
          <table className="table">
            <tr className="table_title">
              <th>ID</th>
              <th>STUDENT NAME</th>
              <th>STUDENT CLASS</th>
              <th>BOOK TITLE</th>
              <th>DATE</th>
              <th>BOOK ID</th>
              <th>LIBRARIAN NAME</th>
              <th>LIBRARIAN PHONE NUMBER</th>
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
            {books.map((book) => {
              return isLoading ? (
                <BounceLoader />
              ) : (
                <tr className="table_content" key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.Student_name}</td>
                  <td>{book.Student_class}</td>
                  <td>{book.Book_title}</td>
                  <td>{book.created_at}</td>
                  <td>{book.Book_id}</td>
                  <td>{book.Librarian_name}</td>
                  <td>{book.Librarian_phone_number}</td>
                  <td>
                    <button type="button" className="btn_update edit">
                      <FaRegEdit />
                    </button>
                  </td>
                  <td>
                    <button type="button" className="btn_update delete">
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
      <div className="historics"></div>
    </div>
  );
};

export default Library;
