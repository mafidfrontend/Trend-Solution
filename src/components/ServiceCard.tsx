import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, delay = 0 }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 border border-gray-100 group hover:transform hover:scale-105 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 group-hover:rotate-12 transition-transform duration-300"></div>
      </div>
      
      <h3 className="text-xl font-semibold font-space text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
      
      <div className="mt-4 h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-500"></div>
    </div>
  );
};

export default ServiceCard;
