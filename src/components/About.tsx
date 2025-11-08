import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg h-80 md:h-96">
              <img
                src="/images/Mahamat.jpg"
                alt="About Me"
                className="object-cover h-full w-full object-center"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Hello! I'm Mahamat Adam</h3>
              <p className="text-gray-600 mb-4">
                I'm a passionate Software Engineering student with a strong interest in frontend development. 
                Currently in my final year, I'm excited to shift from the academic world into corporate to apply my skills in a real world environment and learn
                modern web technologies to create amazing user experiences.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-800">Related Coursework</h4>
                  <ul className="text-gray-600 mt-2 space-y-1">
                    <li>Web Development</li>
                    <li>Software Design</li>
                    <li>Database</li>
                    <li>Visual Programming</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Education</h4>
                  <ul className="text-gray-600 mt-2 space-y-1">
                    <li>BSc Computer Science (Software Engineering)</li>
                    <li>University Tun Hussein Unn Malaysia</li>
                    <li>CPA: 3.4/4.0</li>
                    <li>Expected Grad: 2026</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;