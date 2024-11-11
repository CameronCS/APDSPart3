import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./shared/Nav/NavBar";
import Footer from "./shared/Footer/Footer";
import NotFound from "./shared/404/NotFound";
import HomeScreen from "./home/home/HomeScreen";
import Login from "./home/login/Login";
import AboutUs from "./home/aboutscreen/AboutUs";
import Faq from "./home/faq/Faq";
import Ufaq from "./client/faq/Ufaq";
import ContactUs from "./home/contactus/ContactUs";
import UContactUs from "./client/contact/UContactUs";
import { useState, useEffect } from "react";

import ClientHome from "./client/home/ClientHome";
import AdminHome from "./admin/home/AdminHome";
import ViewAll from "./client/viewall/ViewAll";
import EViewAll from "./admin/view-all/EViewAll";
import Logout from "./shared/Logout/Logout";
import Submit from "./client/submit/Submit";

export default function AppRouter() {
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem('user');
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      return null;
    }
  });
  
  const [userType, setUserType] = useState(0);

  // eslint-disable-next-line
  useEffect(() => {
    if (user) {
      if (user.isadmin === true) {
        setUserType(2);
      } else {
        setUserType(1);
      }
    } else {
      setUserType(0);
    }
  }, [user]);

  return (
    <>
      <NavBar user_type={userType} />
      <Router>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/login' element={<Login setUser={setUser} />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/contact-us' element={<ContactUs />} />

          <Route path='/user/' element={<ClientHome user={user} setUser={setUser} />} />
          <Route path='/user/submit' element={<Submit user={user} setUser={setUser} />} />
          <Route path='/user/view-all' element={<ViewAll user={user} setUser={setUser} />} />
          <Route path='/user/faq' element={<Ufaq user={user} setUser={setUser} />} />
          <Route path='/user/contact' element={<UContactUs user={user} setUser={setUser} />} />

          <Route path='/employee/' element={<AdminHome user={user} />} />
          <Route path='/employee/view-all' element={<EViewAll user={user} setUser={setUser} />} />
          <Route path='/employee/view-submitted' element={<AdminHome user={user} />} />
          <Route path='/employee/view-verified' element={<AdminHome user={user} />} />

          <Route path='/log-out' element={<Logout setUser={setUser} />} />
          <Route path='/404' element={<NotFound />} />
          <Route path='*' element={<Navigate to='/404' />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}
