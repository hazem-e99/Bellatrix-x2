import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Implementation from './components/Services/implementation';
import Training from './components/Services/Training';
import About from './components/About/About';
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Home" element={<LandingPage />} />
      <Route path="/Implementation" element={<Implementation />} />
      <Route path="/Training" element={<Training />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;