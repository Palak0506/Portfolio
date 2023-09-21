// App.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DetailsFillingPage from './Components/DetailsFillComponents/DetailsFillingPage';
import Home from './Components/HomePage/Home';
import NavBar from './Components/Navigation/Navbar';
import MyResume from './Components/ResumeDisplay/MyResume';
import AboutUs from './Components/AboutUs/AboutUs';
import GoogleLogin from './googleLogin'; // Import the GoogleLogin component
import './App.css';

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/detailsfillingpage/*" element={<DetailsFillingPage />} />
          <Route path="/myresume" element={<MyResume />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route path="*" element={<Navigate to="/about" />} />
        </Routes>
      </div>

      {/* Include the Google Login button */}
      <div>
        <GoogleLogin />
      </div>
    </div>
  );
}

export default App;
