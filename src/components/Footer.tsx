import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Let's Connect!</h3>
            <p className="text-gray-300">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>📧 mahammadadam446@gmail.com</p>
              <p>📱 +601160571806</p>
              <p>📍 UTHM</p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Find Me</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/Mahamat-Adam" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300">GitHub</a>
              <a href="https://www.linkedin.com/in/mahamat-adam-6803b5265" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Mahamat Adam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;