
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { products } from '../data/products';

const ProductCarousel: React.FC = () => {
  return (
    <div className="relative max-w-md mx-auto">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem key={product.id}>
              <div className="p-1">
                <div className="bg-gray-200 flex items-center justify-center overflow-hidden rounded-lg" style={{ aspectRatio: '4/3' }}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder.svg';
                    }}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
