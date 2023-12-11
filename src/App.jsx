import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services.jsx";
import Banner from "./components/Banner/Banner.jsx";
import AppStore from "./components/AppStore/AppStore.jsx";
import Footer from "./components/Footer/Footer.jsx";


const App = () => {

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <Services />
      <Banner />
      <AppStore />
      <Footer />
    </div>
  );
};

export default App;
