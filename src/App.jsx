import { Routes, Route, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllServices, setCurrentService } from './Redux/features/services/servicesSlice';

// Layout and Pages
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage/LandingPage';
import Implementation from './components/Services/implementation/implementation';
import Training from './components/Services/Training/Training';
import NetSuiteConsulting from './components/Services/NetSuiteConsulting/NetSuiteConsulting';
import Customization from './components/Services/Customization/Customization';
import Integration from './components/Services/Integration/Integration';
import About from './pages/About';
import DynamicPage from './components/DynamicPage';
import Support from './components/Services/Support/Support';

// Industry Components
import Manufacturing from './components/Industries/Manufacturing/ManufacturingParent';
import Retail from './components/Industries/Retail/Retail';

// Wrapper component to handle dynamic page loading
const DynamicPageWrapper = ({ children }) => {
  const { pageType } = useParams();
  const dispatch = useDispatch();
  const { 
    allServices, 
    currentService,
    loading, 
    error 
  } = useSelector((state) => state.services);

  // Fetch all services on first load
  useEffect(() => {
    dispatch(fetchAllServices());
  }, [dispatch]);

  // Find and set current service when pageType or services change
  useEffect(() => {
    if (pageType && allServices.length > 0) {
      const matchedService = allServices.find(service => 
        service.slug === pageType.toLowerCase() || 
        service.slug?.toLowerCase() === pageType.toLowerCase()
      );
      
      if (matchedService) {
        dispatch(setCurrentService(matchedService));
      }
    }
  }, [pageType, allServices, dispatch]);

  if (loading && !currentService) {
    return <div className="flex justify-center items-center min-h-screen">Loading page...</div>;
  }

  if (error) {
    return <div className="text-red-500 p-4">Error loading page: {error}</div>;
  }

  // Only render children if we have the correct service data
  if (currentService?.slug?.toLowerCase() === pageType?.toLowerCase()) {
    return children;
  }

  return null;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Static Routes */}
        <Route index element={<LandingPage />} />
        <Route path="home" element={<LandingPage />} />
        
        {/* Services Routes */}
        <Route path="implementation" element={<Implementation />} />
        <Route path="training" element={<Training />} />
        <Route path="netsuite-consulting" element={<NetSuiteConsulting />} />
        <Route path="customization" element={<Customization />} />
        <Route path="integration" element={<Integration />} />
        <Route path="support" element={<Support />} />
        
        {/* About */}
        <Route path="about" element={<About />} />
        
        {/* Industry-specific routes */}
        <Route path="industries">
          <Route path="manufacturing" element={<Manufacturing />} />
          <Route path="retail" element={<Retail />} />
        </Route>
        
        {/* Dynamic page route - handles all dynamic content */}
        <Route 
          path=":pageType" 
          element={
            <DynamicPageWrapper>
              <DynamicPage />
            </DynamicPageWrapper>
          } 
        />
      </Route>
    </Routes>
  );
}

export default App;