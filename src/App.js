import React from "react";
import "./index.css";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import MostPicked from "./component/MostPicked";

function App() {
  return (
    <body className="container mx-auto px-16 dark:bg-gray-900">
      <section className="border-b">
        <div className="">
          <Navbar />
        </div>
      </section>

      <section className="mt-16">
        <div className="mx-auto">
          <HeroSection />
        </div>
      </section>

      <section class="mt-16">
        <MostPicked />
      </section>
    </body>
  );
}

export default App;
