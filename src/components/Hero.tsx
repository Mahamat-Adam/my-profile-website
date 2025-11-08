import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Mahamat Youssouf Taher Adam</h1>
          <p className="text-xl mb-8 opacity-90">Computer Science Student & Aspiring Frontend Developer</p>
          <div className="flex justify-center space-x-4">
            <a 
              href="/resume/MahamatAdam-Resume.pdf"
              download
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Download Resume
            </a>
            <a 
              href="#contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition duration-300 inline-block"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;