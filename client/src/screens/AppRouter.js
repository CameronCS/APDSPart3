import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./shared/Nav/NavBar";
import Footer from "./shared/Footer/Footer";
import NotFound from "./shared/404/NotFound";
import HomeScreen from "./home/home/HomeScreen";
import AboutUs from "./home/aboutscreen/AboutUs";
import ContactUs from "./home/contactus/ContactUs";

export default function AppRouter() {
  return (
    <>
      <NavBar user_type={''} />
      <Router>
        <Routes>
          <Route path='/' element={<HomeScreen />}/>
          <Route path='/about-us' element={<AboutUs />}/>
          <Route path='/contact-us' element={<ContactUs />}/>
          <Route path='/404' element={<NotFound />} />
          <Route path='*' element={<Navigate to='/404' />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}
