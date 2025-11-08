import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Hobbies from './components/Hobbies';
import UniversityEvents from './components/UniversityEvents';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <Hero />
      <About />
      <Hobbies />
      <UniversityEvents />
      <Footer />
    </div>
  );
};

export default App;