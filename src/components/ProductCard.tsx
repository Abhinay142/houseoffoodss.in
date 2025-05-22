
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Plus, ShoppingCart } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { toast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState<'250g' | '500g' | '1kg'>('250g');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const [showCartPopover, setShowCartPopover] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize);
    toast({
      title: 'Added to cart',
      description: `${quantity} × ${product.name} (${selectedSize}) added to your cart.`,
      duration: 3000,
    });
    
    // Show the cart popover
    setShowCartPopover(true);
    
    // Automatically hide the popover after 5 seconds
    setTimeout(() => {
      setShowCartPopover(false);
    }, 5000);
  };

  return (
    <div className="product-card bg-white rounded-lg shadow-md overflow-hidden relative">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-40 object-contain"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder.svg';
          }}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-brand-navy">{product.name}</h3>
        
        <div className="mt-2">
          <p className="text-sm text-gray-600 font-medium">Ingredients:</p>
          <p className="text-xs text-gray-500">{product.ingredients.join(', ')}</p>
        </div>
        
        <div className="mt-4">
          <p className="text-sm text-gray-600 font-medium">Size:</p>
          <div className="flex space-x-2 mt-1">
            {Object.keys(product.prices).map((size) => (
              <button
                key={size}
                className={`px-3 py-1 text-xs rounded-full ${
                  selectedSize === size 
                    ? 'bg-brand-yellow text-brand-navy font-semibold' 
                    : 'bg-gray-100 text-gray-700'
                }`}
                onClick={() => setSelectedSize(size as '250g' | '500g' | '1kg')}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="text-sm text-gray-600 font-medium">Quantity:</p>
            <div className="flex items-center space-x-2 mt-1">
              <button 
                className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="w-8 text-center">{quantity}</span>
              <button 
                className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
          
          <div className="text-right">
            <p className="text-sm text-gray-600 font-medium">Price:</p>
            <p className="text-lg font-semibold text-brand-navy">₹{product.prices[selectedSize]}</p>
          </div>
        </div>
        
        <Button 
          className="w-full mt-4 bg-brand-yellow hover:bg-yellow-500 text-brand-navy flex items-center justify-center gap-2"
          onClick={handleAddToCart}
        >
          <Plus size={16} />
          Add to Cart
        </Button>
        
        {/* Cart Popover */}
        {showCartPopover && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 rounded-lg shadow-lg px-5 py-3 flex items-center justify-between gap-4 z-50 animate-fade-in">
            <div className="flex items-center gap-2">
              <ShoppingCart size={20} className="text-brand-navy" />
              <span>Item added to cart</span>
            </div>
            <Link to="/cart">
              <Button 
                className="bg-brand-yellow hover:bg-yellow-500 text-brand-navy"
                onClick={() => setShowCartPopover(false)}
              >
                Go to Cart
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
