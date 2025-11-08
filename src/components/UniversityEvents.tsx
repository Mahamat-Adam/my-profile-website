import React from 'react';
import { UniversityEvent } from '../types';

const UniversityEvents: React.FC = () => {
  const events: UniversityEvent[] = [
    {
      id: 1,
      title: "Annual Tech Symposium 2023",
      description: "Organized and participated in the university's largest technology conference featuring AI and web development workshops.",
      date: "March 2023",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      role: "Event Coordinator & Speaker"
    },
    {
      id: 2,
      title: "Hackathon 2023",
      description: "Led a team of 4 developers to create a sustainable energy tracking web application, winning 2nd place.",
      date: "October 2023",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      role: "Team Lead & Frontend Developer"
    },
    {
      id: 3,
      title: "CS Department Open House",
      description: "Represented the Computer Science department, demonstrating student projects to prospective students.",
      date: "January 2023",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      role: "Student Ambassador"
    },
    {
      id: 4,
      title: "Web Development Workshop",
      description: "Conducted workshops teaching React.js and TypeScript fundamentals to junior students.",
      date: "November 2023",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      role: "Workshop Instructor"
    }
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title">University Events & Activities</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
                  <span className="bg-primary text-white text-sm px-3 py-1 rounded-full">{event.date}</span>
                </div>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg inline-block">
                  <span className="font-semibold">Role:</span> {event.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniversityEvents;