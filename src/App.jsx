import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage/LandingPage';
import Implementation from './components/Services/implementation';
import Training from './components/Services/Training';
import NetSuiteConsulting from './components/Services/NetSuiteConsulting';
import About from './components/About/About';
import HRSolution from './pages/HrPage/HR';
import Payroll from './components/Payroll/Payroll';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="Home" element={<LandingPage />} />
        <Route path="Implementation" element={<Implementation />} />
        <Route path="Training" element={<Training />} />
        <Route path="netsuite-consulting" element={<NetSuiteConsulting />} />
        <Route path="about" element={<About />} />
        <Route path="HRSolution" element={<HRSolution />} />
        <Route path="Payroll" element={<Payroll />} />
      </Route>
    </Routes>
  );
}

export default App;