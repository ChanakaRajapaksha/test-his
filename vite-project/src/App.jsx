import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Register from "./pages/login/register";
import Dashboard from "./pages/dashborad/Dashboard";
import Doctor from "./components/Doctor";
import Patient from "./components/Patient";
import Layout from "./components/Layout";
import Announcement from "./components/Announcement";
import Appointments from "./components/Appoinments";
import Calendar from "./pages/calendar/Calendar";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Layout is applied to all routes inside the dashboard */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/announcement" element={<Announcement />} />
          <Route path="/appoinments" element={<Appointments />} />
          <Route path="/calendar" element={<Calendar />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
