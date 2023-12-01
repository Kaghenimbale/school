import { useEffect, useState } from 'react';
import './library.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  UpdateBook,
  deleteBook,
  fetchBooks,
  postBook,
} from '../../redux/bookSlice';
import { BeatLoader } from 'react-spinners';
import { FaTrashAlt } from 'react-icons/fa';
import { FaRegEdit } from 'react-icons/fa';
import { HiOutlineSave } from 'react-icons/hi';

const Library = () => {
  const { books, isLoading, isFetched } = useSelector((state) => state.books);
  const [update, setUpdate] = useState(false);
  const [editId, setEditId] = useState(null);
  const dispatch = useDispatch();

  // console.log(books, isLoading, isFetched, err);

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

  const [editdata, setEditData] = useState({
    Student_name: '',
    Book_title: '',
    Book_id: '',
    Student_class: '',
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

  const handleUpdate = (id, bookData) => {
    setUpdate(true);
    setEditId(id);
    setEditData({ ...bookData });
  };

  const handleChangeEdit = (e) => {
    setEditData({
      [e.target.name]: e.target.value,
    });
    console.log(editdata);
  };

  const handleSubmitUpdate = (id) => {
    dispatch(UpdateBook(id, editId));
    setUpdate(false);
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
          {isLoading && (
            <div className="spinner">
              <BeatLoader className="loading-spinner" color="#0f5b97" />
            </div>
          )}
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
              {books.map((book) => (
                <tr className="table_content" key={book.id}>
                  <td>{book.id}</td>
                  {update && editId === book.id ? (
                    <td>
                      <input
                        type="text"
                        name="Student_name"
                        value={editdata.Student_name}
                        onChange={handleChangeEdit}
                      />
                    </td>
                  ) : (
                    <td>{book.Student_name}</td>
                  )}
                  {update && editId === book.id ? (
                    <td>
                      <input
                        type="text"
                        name="Student_class"
                        value={editdata.Student_class}
                        onChange={handleChangeEdit}
                      />
                    </td>
                  ) : (
                    <td>{book.Student_class}</td>
                  )}
                  {update && editId === book.id ? (
                    <td>
                      <input
                        type="text"
                        name="Book_title"
                        value={editdata.Book_title}
                        onChange={handleChangeEdit}
                      />
                    </td>
                  ) : (
                    <td>{book.Book_title}</td>
                  )}
                  {update && editId === book.id ? (
                    <td>
                      <input
                        type="date"
                        value={editdata.created_at.slice(0, 10)}
                        onChange={handleChangeEdit}
                      />
                    </td>
                  ) : (
                    <td>{book.created_at.slice(0, 10)}</td>
                  )}
                  {update && editId === book.id ? (
                    <td>
                      <input
                        type="text"
                        name="Book_id"
                        value={editdata.Book_id}
                        onChange={handleChangeEdit}
                      />
                    </td>
                  ) : (
                    <td>{book.Book_id}</td>
                  )}
                  {update && editId === book.id ? (
                    <td>
                      <input
                        type="text"
                        name="Librarian_name"
                        value={editdata.Librarian_name}
                        onChange={handleChangeEdit}
                      />
                    </td>
                  ) : (
                    <td>{book.Librarian_name}</td>
                  )}
                  {update && editId === book.id ? (
                    <td>
                      <input
                        type="tel"
                        name="Librarian_phone_number"
                        value={editdata.Librarian_phone_number}
                        onChange={handleChangeEdit}
                      />
                    </td>
                  ) : (
                    <td>{book.Librarian_phone_number}</td>
                  )}
                  <td className="btn_container">
                    {update && editId ? (
                      <button
                        type="button"
                        className="btn_update edit"
                        onClick={() => handleSubmitUpdate(book.id, book)}
                      >
                        <HiOutlineSave />
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn_update edit"
                        onClick={() => handleUpdate(book.id, book)}
                      >
                        <FaRegEdit />
                      </button>
                    )}
                    <button
                      type="button"
                      className="btn_update delete"
                      onClick={() => handleDelete(book.id)}
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="historics"></div>
    </div>
  );
};

export default Library;
