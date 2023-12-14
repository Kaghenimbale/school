import { useEffect, useState } from 'react';
import './dashboard.css';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, getBooks } from '../../../redux/livreSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { livres } = useSelector((state) => state.livres);
  const [data, setData] = useState({
    name: '',
    image: null,
    author: '',
  });

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (e) => {
    setData({ ...data, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataForApi = new FormData();
      formDataForApi.append('name', data.name);
      formDataForApi.append('author', data.author);
      formDataForApi.append('image', data.image);

      // const objectFromFormData = {};
      // formDataForApi.forEach((value, key) => {
      //   objectFromFormData[key] = value;
      // });

      await dispatch(addBook(formDataForApi));

      await dispatch(getBooks());

      setData({
        name: '',
        image: null,
        author: '',
      });
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="book_container">
        <h2>Books Available</h2>
        <div>
          <form
            className="book_form"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={data.name}
              className="input"
              onChange={handleChange}
            />

            <input type="file" name="image" onChange={handleImageChange} />

            <input
              type="text"
              name="author"
              value={data.author}
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
        {livres.map((livre) => {
          return (
            <div key={livre.id}>
              <img src={livre.image} alt="img" />
              <div>
                <p>{livre.name}</p>
                <p>{livre.author}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
