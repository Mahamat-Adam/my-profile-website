import React from 'react';
import { Hobby } from '../types';

const Hobbies: React.FC = () => {
  const hobbies: Hobby[] = [
    {
      id: 1,
      title: "Programming",
      description: "My true passion lies in coding and problem-solving. I am constantly driven by the challenge of translating complex logic into efficient, functional programs. As a student of Software Engineering, I am eager to grow specifically as a Web Developer",
      image: "images/Programming.jpg"
    },
    {
      id: 2,
      title: "Football",
      description: "Enjoying the beautiful game, with my friends physically playing, or simply watching a game on the television.",
      image: "images/Football.jpg"
    },
    {
      id: 3,
      title: "Going for a walk",
      description: "Going for a walk really clears my mind and helps me increase focus and energy for any task or activity i participate in.",
      image: "images/walk.jpg"
    },
    {
      id: 4,
      title: "Traveling",
      description: "I have a passion for exploring new places and adventures. A memorable trip I took one time with my brother to Bali, Indonesia, in April 2024. We were completely immersed in the beauty of the island, enjoying the lush greenery, stunning beaches, and the overall vibrant culture.",
      image: "images/bali.jpg"
    }
  ];

  return (
    <section id="hobbies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="section-title">My Hobbies & Interests</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hobbies.map((hobby) => (
            <div key={hobby.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <img 
                src={hobby.image} 
                alt={hobby.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{hobby.title}</h3>
                <p className="text-gray-600">{hobby.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;