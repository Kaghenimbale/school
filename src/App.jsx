import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Accueil from './components/accueil/Accueil';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Dashboard from './components/Private/Dashboard/Dashboard';
import Student from './components/Private/Student/Student';
import Courses from './components/Private/Courses/Courses';
import Teachers from './components/Private/Teachers/Teachers';
import Attendances from './components/Private/Attendances/Attendances';
import Payment from './components/Private/Payment/Payment';
import Settings from './components/Private/Settings/Settings';
import Navbar from './components/Private/Navbar/Navbar';

function App() {
  const [id, setId] = useState(localStorage.getItem('user'));

  const loggedIn = useSelector((store) => store.user.loggedIn);

  useEffect(() => {
    setId(localStorage.getItem('user'));
  }, [loggedIn]);
  return (
    <>
      <Router>
        {id ? (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="students" element={<Student />} />
              <Route path="courses" element={<Courses />} />
              <Route path="teachers" element={<Teachers />} />
              <Route path="attendances" element={<Attendances />} />
              <Route path="payment" element={<Payment />} />
              <Route path="settings" element={<Settings />} />
            </Routes>
          </>
        ) : (
          <>
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="signin" element={<Signin />} />
              <Route path="signup" element={<Signup />} />
              <Route path="*" element={<h1>Something went Wrong!!!</h1>} />
            </Routes>
          </>
        )}
      </Router>
    </>
  );
}

export default App;
