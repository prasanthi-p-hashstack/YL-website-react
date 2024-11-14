import React, { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Loginpage from './Pages/Login-page/login-page';
import Home from './Pages/Home/Home';
import Equipment from './Pages/Equipment/Equipment';
import Parts from './Pages/Parts/Parts';
import Fleet from './Pages/Fleet/Fleet';
import HeavyWeight from './Pages/Heavy-Weight/Heavy-Weight';
import Careers from './Pages/Careers/Careers';
import About from './Pages/About/About';
import Shop from './Pages/Shop/Shop';
import SingleBlogPost from './Pages/Heavy-Weight/Single-Blog-Post/Single-Blog-Post';
import SingleJobPostComponent from './Pages/Careers/Single-Job-Post';
import Footer from './Components/Footer/Footer';
import EnquireForm from './Components/EnquireForm-page/EnquireForm';
import Loader from './Components/Page-spinner/Loader';
import Categories from './Pages/Categories/Categories';
import Services from './Pages/Services/Services';
import Register from './Pages/Login-page/Register';
import CreatePassword from './Pages/Login-page/Create-Password';

// Component to scroll to top on every route change
function ScrollToTopOnRouteChange() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation(); // Track the current route location

  const isLoginPage = location.pathname === '/login' || location.pathname==='/register-user' || location.pathname === '/reset-password';

  useEffect(() => {
    // Start loading whenever the location changes
    setIsLoading(true);

    // Simulate loading time or any asynchronous data fetch here
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Adjust time as needed

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, [location]); // Runs every time the location (route) changes

  return (
    <>
      <ScrollToTopOnRouteChange /> {/* Handles scroll to top on route change */}
      {!isLoginPage &&<Header />}
      {isLoading ? (
        <Loader /> // Show loader when `isLoading` is true
      ) : (
        <Routes> {/* Show content when `isLoading` is false */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path='/register-user' element={<Register/>}/>
          <Route path='/reset-password' element={<CreatePassword/>}/>
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/parts" element={<Parts />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/about" element={<About />} />
          <Route path="/heavy-weight" element={<HeavyWeight />} />
          <Route path="/blog/:id" element={<SingleBlogPost />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/job/:id" element={<SingleJobPostComponent />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/enquire-form" element={<EnquireForm />} />
          <Route path='/categories' element={<Categories/>}/>
          <Route path='/services' element={<Services/>}/>
        </Routes>
      )}
      {!isLoginPage && <Footer />}
    </>
  );
}

export default function MainApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
