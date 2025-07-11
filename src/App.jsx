import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage/LandingPage';
import Implementation from './components/Services/implementation/implementation';
import Training from './components/Services/Training/Training';
import NetSuiteConsulting from './components/Services/NetSuiteConsulting/NetSuiteConsulting';
import Customization from './components/Services/Customization/Customization';
import Integration from './components/Services/Integration/Integration';
import About from './pages/About';
import HRSolution from './pages/HrPage/HR';
import Payroll from './pages/Payroll';
import Support from './components/Support/Support';
import Manufacturing from './pages/Industries/Manufacturing';
import Retail from './pages/Industries/Retail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="Home" element={<LandingPage />} />
        <Route path="Implementation" element={<Implementation />} />
        <Route path="Training" element={<Training />} />
        <Route path="netsuite-consulting" element={<NetSuiteConsulting />} />
        <Route path="customization" element={<Customization />} />
        <Route path="integration" element={<Integration />} />
        <Route path="about" element={<About />} />
        <Route path="HRSolution" element={<HRSolution />} />
        <Route path="Payroll" element={<Payroll />} />
        <Route path="Support" element={<Support />} />
        <Route path="industries/manufacturing" element={<Manufacturing />} />
        <Route path="industries/retail" element={<Retail />} />
      </Route>
    </Routes>
  );
}

export default App;
