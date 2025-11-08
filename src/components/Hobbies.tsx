import React from 'react';
import { Hobby } from '../types';

const Hobbies: React.FC = () => {
  const hobbies: Hobby[] = [
    {
      id: 1,
      title: "Photography",
      description: "Capturing moments and landscapes, exploring different photography techniques and editing styles.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 2,
      title: "Hiking",
      description: "Exploring nature trails and mountains, enjoying the outdoors and physical challenges.",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 3,
      title: "Reading Tech Blogs",
      description: "Staying updated with the latest web development trends and technologies.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 4,
      title: "Playing Guitar",
      description: "Learning and playing various music genres, from classical to contemporary.",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
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