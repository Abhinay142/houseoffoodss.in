
import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { products } from '../data/products';

const ProductCarousel: React.FC = () => {
  const [api, setApi] = useState<any>();

  // Hero image and all product first images
  const slideImages = [
    '/lovable-uploads/5978607c-d7ab-4c64-94c8-099a32a53207.png', // Hero image first
    ...products.map(product => product.image) // All product first images
  ];

  useEffect(() => {
    if (!api) return;

    // Auto-play with 1 second interval
    const interval = setInterval(() => {
      api.scrollNext();
    }, 1000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="relative max-w-md mx-auto">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        setApi={setApi}
      >
        <CarouselContent>
          {slideImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <div className="bg-gray-200 flex items-center justify-center overflow-hidden rounded-lg" style={{ aspectRatio: '4/3' }}>
                  <img 
                    src={image} 
                    alt={index === 0 ? "House of Foods Hero" : `Product ${index}`}
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
