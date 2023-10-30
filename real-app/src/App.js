import React from "react";
import Featured from "./components/Featured/Featured"; // Corrected the path

import Best from "./components/Best/Best";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/hero/Hero";
import Footer from "./components/Footer/Footer";
import SignInForm from "./components/User/SignInForm"; // Import SignInForm from User folder
import RegisterForm from "./components/Newbie/RegisterForm"; // Import RegisterForm from Newbie folder

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Best />
      <Featured />
      <Footer />
      <SignInForm /> {/* Use SignInForm component */}
      <RegisterForm /> {/* Use RegisterForm component */}
    </div>
  );
}

export default App;
