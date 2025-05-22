
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import { products as allProducts, Product } from '@/data/products';

const Menu: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<string>(searchParams.get('category') || 'all');

  useEffect(() => {
    if (category === 'all') {
      setProducts(allProducts);
    } else {
      setProducts(allProducts.filter(product => product.category === category));
    }
    
    // Update URL with the selected category
    if (category === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  }, [category, setSearchParams]);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-8 text-center">
        Our Menu
      </h1>

      {/* Category Filter Tabs */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-gray-100 rounded-full p-1">
          <button
            className={`px-4 py-2 text-sm font-medium rounded-full ${
              category === 'all' ? 'bg-brand-yellow text-brand-navy' : 'text-gray-600'
            }`}
            onClick={() => setCategory('all')}
          >
            All Items
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium rounded-full ${
              category === 'sweets' ? 'bg-brand-yellow text-brand-navy' : 'text-gray-600'
            }`}
            onClick={() => setCategory('sweets')}
          >
            Sweets
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium rounded-full ${
              category === 'savouries' ? 'bg-brand-yellow text-brand-navy' : 'text-gray-600'
            }`}
            onClick={() => setCategory('savouries')}
          >
            Savouries
          </button>
        </div>
      </div>

      {/* Display category title */}
      {category !== 'all' && (
        <h2 className="text-2xl font-semibold text-brand-navy mb-6 capitalize">
          {category}
        </h2>
      )}

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-16">
          <p className="text-xl text-gray-600">No products found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default Menu;
