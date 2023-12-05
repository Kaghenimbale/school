import { useEffect, useState } from 'react';
import './library.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteBook,
  fetchBooks,
  postBook,
  updateBook,
} from '../../redux/bookSlice';
import { BeatLoader } from 'react-spinners';
import { FaTrashAlt } from 'react-icons/fa';
import { FaRegEdit } from 'react-icons/fa';
import { HiOutlineSave } from 'react-icons/hi';

const Library = () => {
  const { books, isLoading, isFetched, err } = useSelector(
    (state) => state.books,
  );
  const dispatch = useDispatch();

  console.log(err);

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

  const [editBook, setEditBook] = useState({
    Student_name: '',
    Book_title: '',
    Book_id: '',
    Student_class: '',
    Date_taken: '',
    Time: '',
    Librarian_name: '',
    Librarian_phone_number: '',
  });

  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(postBook(data));

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
    } catch (error) {
      console.error('Error submitting book:', error);
    }
  };
  useEffect(() => {
    if (!isFetched) {
      dispatch(fetchBooks());
    }

    if (isLoading && isFetched) {
      dispatch(fetchBooks());
    }
  }, [dispatch, isLoading, isFetched]);

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  // UPDATE BOOK

  const handleUpdate = (id, book) => {
    setEdit(true);
    setEditId(id);
    setEditBook({ ...book });
  };

  const handleEditChange = (e) => {
    setEditBook((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBook(editBook));
    setEdit(false);
  };
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
          {isLoading ||
            (books.length === 0 && (
              <div className="spinner">
                <BeatLoader className="loading-spinner" color="#0f5b97" />
              </div>
            ))}
          <table className="table">
            <thead>
              <tr className="table_title">
                <th>ID</th>
                <th>STUDENT NAME</th>
                <th>STUDENT CLASS</th>
                <th>BOOK TITLE</th>
                <th>DATE</th>
                <th>BOOK ID</th>
                <th>LIBRARIAN NAME</th>
                <th>LIBRARIAN PHONE NUMBER</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) =>
                edit && editId === book.id ? (
                  <tr className="table_content" key={book.id}>
                    <td>{book.id}</td>
                    <td>
                      <form onSubmit={handleEditSubmit}>
                        <input
                          name="Student_name"
                          value={editBook.Student_name}
                          onChange={handleEditChange}
                          className="update_input"
                        />
                      </form>
                    </td>
                    <td>
                      <form onSubmit={handleEditSubmit}>
                        <input
                          name="Student_class"
                          value={editBook.Student_class}
                          onChange={handleEditChange}
                          className="update_input"
                        />
                      </form>
                    </td>
                    <td>
                      <form onSubmit={handleEditSubmit}>
                        <input
                          name="Book_title"
                          value={editBook.Book_title}
                          onChange={handleEditChange}
                          className="update_input"
                        />
                      </form>
                    </td>
                    <td>{book.created_at.slice(0, 10)}</td>
                    <td>
                      <form onSubmit={handleEditSubmit}>
                        <input
                          name="Book_id"
                          value={editBook.Book_id}
                          onChange={handleEditChange}
                          className="update_input"
                        />
                      </form>
                    </td>
                    <td>
                      <form onSubmit={handleEditSubmit}>
                        <input
                          name="Librarian_name"
                          value={editBook.Librarian_name}
                          onChange={handleEditChange}
                          className="update_input"
                        />
                      </form>
                    </td>
                    <td>
                      <form onSubmit={handleEditSubmit}>
                        <input
                          name="Librarian_phone_number"
                          value={editBook.Librarian_phone_number}
                          onChange={handleEditChange}
                          className="update_input"
                        />
                      </form>
                    </td>
                    <td className="btn_container">
                      <button
                        type="button"
                        className="btn_update edit"
                        onSubmit={handleEditSubmit}
                      >
                        <HiOutlineSave />
                      </button>
                      <button
                        type="button"
                        className="btn_update delete"
                        onClick={() => handleDelete(book.id)}
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ) : (
                  <tr className="table_content" key={book.id}>
                    <td>{book.id}</td>
                    <td>{book.Student_name}</td>
                    <td>{book.Student_class}</td>
                    <td>{book.Book_title}</td>
                    <td>{book.created_at.slice(0, 10)}</td>
                    <td>{book.Book_id}</td>
                    <td>{book.Librarian_name}</td>
                    <td>{book.Librarian_phone_number}</td>
                    <td className="btn_container">
                      <button
                        type="button"
                        className="btn_update edit"
                        onClick={() => handleUpdate(book.id, book)}
                      >
                        <FaRegEdit />
                      </button>
                      <button
                        type="button"
                        className="btn_update delete"
                        onClick={() => handleDelete(book.id)}
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="historics"></div>
    </div>
  );
};

export default Library;
