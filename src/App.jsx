import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Accueil from './components/accueil/Accueil';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './components/Private/Navbar/Navbar';
import AppRoutes from './AppRoutes';

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
            <AppRoutes />
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
