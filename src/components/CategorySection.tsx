
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

interface CategorySectionProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const CategorySection: React.FC<CategorySectionProps> = ({ title, description, image, link }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
      <div className="md:w-1/2 bg-gray-200 flex items-center justify-center overflow-hidden" style={{ aspectRatio: '4/3' }}>
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder.svg';
          }}
        />
      </div>
      <div className="md:w-1/2 p-6 flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-brand-navy mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <Link to={link}>
          <Button className="bg-brand-yellow hover:bg-yellow-500 text-brand-navy">
            Explore {title}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CategorySection;
