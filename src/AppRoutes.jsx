import Dashboard from './components/Private/Dashboard/Dashboard';
import Student from './components/Private/Student/Student';
import Courses from './components/Private/Courses/Courses';
import Teachers from './components/Private/Teachers/Teachers';
import Attendances from './components/Private/Attendances/Attendances';
import Payment from './components/Private/Payment/Payment';
import Settings from './components/Private/Settings/Settings';
import { Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="students" element={<Student />} />
        <Route path="courses" element={<Courses />} />
        <Route path="teachers" element={<Teachers />} />
        <Route path="attendances" element={<Attendances />} />
        <Route path="payment" element={<Payment />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
