import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar
        mylogo="MyLogo"
        home="Home"
        menu="Menu"
        mobileApp="Mobile App"
        contactUs="Contact Us"
        signIn="Sign In"
      />
    </div>
  );
}

export default App;
