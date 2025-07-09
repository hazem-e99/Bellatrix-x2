import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Implementation from './components/Services/implementation';
import Training from './components/Services/Training';
import About from './components/About/About';
<<<<<<< Updated upstream
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Home" element={<LandingPage />} />
      <Route path="/Implementation" element={<Implementation />} />
      <Route path="/Training" element={<Training />} />
      <Route path="/about" element={<About />} />
=======
import HRSolution from './pages/HrPage/HR';
import Payroll from './components/Payroll/Payroll';
import Support from './components/Support/Support';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="Home" element={<LandingPage />} />
        <Route path="Implementation" element={<Implementation />} />
        <Route path="Training" element={<Training />} />
        <Route path="about" element={<About />} />
        <Route path="HRSolution" element={<HRSolution />} />
        <Route path="Payroll" element={<Payroll />} />
        <Route path="Support" element={<Support />} />
      </Route>
>>>>>>> Stashed changes
    </Routes>
  );
}

export default App;