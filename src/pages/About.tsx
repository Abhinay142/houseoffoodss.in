
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-beige">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy text-center mb-12">
            About Us
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At House Of Foods, we are driven by passion and the joy of sharing delicious homemade flavors. Founded by two independent women—both loving mothers—who have always cherished the art of cooking and the happiness it brings to those around them. Our journey began in our kitchens, creating tasty treats with care and love for family and friends.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Now, we're excited to bring our carefully crafted delicacies to the world. Every snack and sweet we prepare carries the warmth of home and the authentic taste of tradition. At House Of Foods, we believe that good food connects hearts, and we invite you to experience the comforting flavors that feel just like mom made.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-brand-beige rounded-lg">
                <div className="text-4xl text-brand-yellow mb-4">👩‍👩‍👧‍👦</div>
                <h3 className="text-xl font-semibold text-brand-navy mb-2">Founded by Mothers</h3>
                <p className="text-gray-600">Two independent women who are passionate about cooking and sharing joy through food.</p>
              </div>
              
              <div className="text-center p-6 bg-brand-beige rounded-lg">
                <div className="text-4xl text-brand-yellow mb-4">🏠</div>
                <h3 className="text-xl font-semibold text-brand-navy mb-2">Homemade Quality</h3>
                <p className="text-gray-600">Every item is prepared with the same care and attention as in our own kitchens.</p>
              </div>
              
              <div className="text-center p-6 bg-brand-beige rounded-lg">
                <div className="text-4xl text-brand-yellow mb-4">❤️</div>
                <h3 className="text-xl font-semibold text-brand-navy mb-2">Made with Love</h3>
                <p className="text-gray-600">Authentic flavors that connect hearts and bring the warmth of tradition to your table.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
