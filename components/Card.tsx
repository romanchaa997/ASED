import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  // FIX: Replaced JSX.Element with React.ReactElement to resolve namespace issue.
  icon?: React.ReactElement;
}

const Card: React.FC<CardProps> = ({ title, children, className = '', icon }) => {
  return (
    <div className={`bg-gray-800 shadow-lg rounded-xl overflow-hidden ${className}`}>
      <div className="p-5 sm:p-6 border-b border-gray-700">
        <div className="flex items-center">
          {icon && <div className="mr-3">{icon}</div>}
          <h2 className="text-lg font-semibold text-gray-200">{title}</h2>
        </div>
      </div>
      <div className="p-5 sm:p-6">
        {children}
      </div>
    </div>
  );
};

export default Card;