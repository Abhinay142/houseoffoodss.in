import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Plus } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState<'250g' | '500g' | '1kg'>('250g');
  const [quantity, setQuantity] = useState(1);
  const [showQuantity, setShowQuantity] = useState(false);
  const { addToCart, updateQuantity, cartItems } = useCart();
  const { toast } = useToast();

  // Check if this product with current size is in cart and sync quantity
  useEffect(() => {
    const cartItem = cartItems.find(
      item => item.product.id === product.id && item.size === selectedSize
    );
    
    if (cartItem && cartItem.quantity > 0) {
      setQuantity(cartItem.quantity);
      setShowQuantity(true);
    } else {
      setQuantity(1);
      setShowQuantity(false);
    }
  }, [cartItems, product.id, selectedSize]);

  const handleAddToCart = () => {
    if (!showQuantity) {
      addToCart(product, 1, selectedSize);
      setShowQuantity(true);
      setQuantity(1);
      
      // Show toast notification
      toast({
        title: "Added to cart",
        description: `${product.name} (${selectedSize}) has been added to your cart.`,
      });
    }
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return;
    setQuantity(newQuantity);
    updateQuantity(product.id, selectedSize, newQuantity);
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
          {showQuantity && (
            <div>
              <p className="text-sm text-gray-600 font-medium">Quantity:</p>
              <div className="flex items-center space-x-2 mt-1">
                <button 
                  className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center"
                  onClick={() => handleQuantityChange(quantity - 1)}
                >
                  -
                </button>
                <span className="w-8 text-center">{quantity}</span>
                <button 
                  className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center"
                  onClick={() => handleQuantityChange(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
          )}
          
          <div className={showQuantity ? "text-right" : "text-right ml-auto"}>
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
      </div>
    </div>
  );
};

export default ProductCard;
