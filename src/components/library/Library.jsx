import './library.css';

const Library = () => {
  return (
    <div>
      <div>
        <form className="forms">
          <label htmlFor="">
            <input
              type="text"
              className="input_library"
              name="name"
              placeholder="Name"
            />
          </label>
          <label htmlFor="">
            <input
              type="text"
              className="input_library"
              name="class"
              placeholder="Student Class"
            />
          </label>
          <label htmlFor="">
            <input
              type="date"
              className="input_library"
              name="datetime"
              placeholder="Date"
            />
          </label>
          <label htmlFor="">
            <input
              type="time"
              className="input_library"
              name="name"
              placeholder="Time"
            />
          </label>
          <label htmlFor="">
            <input
              type="tel"
              className="input_library"
              name="phone"
              placeholder="Phone Number"
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
