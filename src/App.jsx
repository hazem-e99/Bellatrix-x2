import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage/LandingPage';
import Implementation from './components/Services/implementation/implementation';
import Training from './components/Services/Training/Training';
import NetSuiteConsulting from './components/Services/NetSuiteConsulting/NetSuiteConsulting';
import Customization from './components/Services/Customization/Customization';
import Integration from './components/Services/Integration/Integration';
import About from './pages/About';
import DynamicPage from './components/DynamicPage';
import Support from './components/Support/Support';
import Manufacturing from './components/Industries/Manufacturing/ManufacturingParent';
import Retail from './components/Industries/Retail/Retail';
import PayrollParent from './components/Payroll/Refactored/PayrollParent';

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
        {/* <Route path="Payroll" element={<PayrollParent />} /> */}
        {/* <Route path="HRSolution" element={<DynamicPage />} />
        <Route path="Payroll" element={<DynamicPage />} /> */}
        <Route path=":pageType" element={<DynamicPage />} />

        <Route path="Support" element={<Support />} />
        <Route path="industries/manufacturing" element={<Manufacturing />} />
        <Route path="industries/retail" element={<Retail />} />
      </Route>
    </Routes>
  );
}

export default App;
