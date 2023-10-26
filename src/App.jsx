import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Accueil from './components/accueil/Accueil';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<h1>Something went Wrong!!!</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
