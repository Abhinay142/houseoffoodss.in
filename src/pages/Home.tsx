
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CategorySection from '@/components/CategorySection';
import ProductCarousel from '@/components/ProductCarousel';

const Home: React.FC = () => {
  return <div>
      {/* Hero Section */}
      <section className="bg-brand-yellow py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
              Delicious Homemade Sweets & Savouries
            </h1>
            <p className="text-xl md:text-2xl text-brand-navy mb-8">Just like mom made!</p>
            <Link to="/menu">
              <Button className="bg-brand-navy hover:bg-opacity-80 text-white px-8 py-6 text-lg">
                Order Now
              </Button>
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <ProductCarousel />
          </div>
        </div>
      </section>

      {/* Delivery Highlights Section */}
      <section className="bg-brand-navy py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-center">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🚚</div>
              <div>
                <h3 className="text-xl font-bold text-white">All Over India Delivery</h3>
                <p className="text-brand-yellow">We deliver nationwide!</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-brand-yellow"></div>
            <div className="flex items-center gap-3">
              <div className="text-3xl">🎁</div>
              <div>
                <h3 className="text-xl font-bold text-white">Free Delivery</h3>
                <p className="text-brand-yellow">On orders above ₹1499</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="py-16 bg-brand-beige">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-navy text-center mb-12">
            Shop by Category
          </h2>
          <div className="space-y-8">
            <CategorySection title="Sweets" description="Indulge in our range of traditional sweets made with pure ingredients and authentic recipes passed down through generations." image="/lovable-uploads/a17eeb10-8f0e-4a68-adeb-c905a00cbf17.png" link="/menu?category=sweets" />
            <CategorySection title="Savouries" description="Enjoy the perfect crunch and flavor of our savory snacks, prepared with premium ingredients and careful attention to taste." image="/lovable-uploads/5b25c230-e261-47c5-b8c9-557f731645d7.png" link="/menu?category=savouries" />
          </div>
        </div>
      </section>

      {/* Why House of Foods Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-navy text-center mb-12">
            Why House of Foods?
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              At House of Foods, we bring the warmth of homemade recipes straight to your doorstep. Every bite is packed with the goodness and care of mom's kitchen.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-brand-beige rounded-lg">
                <div className="text-4xl text-brand-yellow mb-4">🌿</div>
                <h3 className="text-xl font-semibold text-brand-navy mb-2">Pure Ingredients</h3>
                <p className="text-gray-600">We use only the finest quality ingredients, sourced from trusted suppliers.</p>
              </div>
              <div className="p-6 bg-brand-beige rounded-lg">
                <div className="text-4xl text-brand-yellow mb-4">👨‍👩‍👧</div>
                <h3 className="text-xl font-semibold text-brand-navy mb-2">Family Recipes</h3>
                <p className="text-gray-600">Traditional recipes treasured and perfected through generations.</p>
              </div>
              <div className="p-6 bg-brand-beige rounded-lg">
                <div className="text-4xl text-brand-yellow mb-4">❤️</div>
                <h3 className="text-xl font-semibold text-brand-navy mb-2">Made with Love</h3>
                <p className="text-gray-600">Every item is prepared with care and attention to detail.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};

export default Home;
