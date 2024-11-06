import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./shared/Nav/NavBar";
import Footer from "./shared/Footer/Footer";
import NotFound from "./shared/404/NotFound";
import HomeScreen from "./home/home/HomeScreen";
import Login from "./home/login/Login";
import AboutUs from "./home/aboutscreen/AboutUs";
import Faq from "./home/faq/Faq";
import ContactUs from "./home/contactus/ContactUs";
import { useEffect, useState } from "react";

import ClientHome from "./client/home/ClientHome";
import AdminHome from "./admin/home/AdminHome";

export default function AppRouter() {
  const [user, setUser] = useState()
  const [userType, setUserType] = useState('')

  useEffect(() => {
    if (user) {
      if (user.isadmin === true) {
        setUserType('employee')
      } else {
        setUserType('user')
      }
    } else {
      setUserType('')
    }
  }, [user])

  

  return (
    <>
      <NavBar user_type={userType} />
      <Router>
        <Routes>
          <Route path='/' element={<HomeScreen />}/>
          <Route path='/login' element={<Login setUser={setUser} />}/>
          <Route path='/about-us' element={<AboutUs />}/>
          <Route path='/faq' element={<Faq />}/>
          <Route path='/contact-us' element={<ContactUs />}/>

          <Route path='/user/' element={<ClientHome user={user} />} />

          <Route path='/employee/' element={<AdminHome user={user} />} />

          <Route path='/404' element={<NotFound />} />
          <Route path='*' element={<Navigate to='/404' />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}
