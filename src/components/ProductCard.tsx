
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Plus } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const availableSizes = Object.keys(product.prices).filter(size => product.prices[size as keyof typeof product.prices] !== undefined) as ('250g' | '500g' | '1kg')[];
  const [selectedSize, setSelectedSize] = useState<'250g' | '500g' | '1kg'>(availableSizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [showQuantity, setShowQuantity] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addToCart, updateQuantity, cartItems, removeFromCart } = useCart();
  const { toast } = useToast();
  const isMobile = useIsMobile();

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

  // Auto slideshow for mobile when product has hover image
  useEffect(() => {
    if (isMobile && product.hoverImage) {
      const interval = setInterval(() => {
        setCurrentImageIndex(prev => prev === 0 ? 1 : 0);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isMobile, product.hoverImage]);

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
    if (newQuantity < 1) {
      // Remove item from cart when quantity goes below 1
      removeFromCart(product.id, selectedSize);
      setShowQuantity(false);
      setQuantity(1);
      return;
    }
    setQuantity(newQuantity);
    updateQuantity(product.id, selectedSize, newQuantity);
  };

  // Determine which image to show
  const getImageToShow = () => {
    if (isMobile && product.hoverImage) {
      return currentImageIndex === 0 ? product.image : product.hoverImage;
    }
    return isHovered && product.hoverImage ? product.hoverImage : product.image;
  };

  // Get piece count for Bobbatlu
  const getPieceCount = (size: string) => {
    if (product.id === 'bobbatlu') {
      if (size === '500g') return '7-8 pieces';
      if (size === '1kg') return '15 pieces';
    }
    return null;
  };

  return (
    <div className="product-card bg-white rounded-lg shadow-md overflow-hidden relative">
      <div 
        className="relative bg-gray-200 flex items-center justify-center overflow-hidden"
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
        style={{ aspectRatio: '4/3' }}
      >
        <img 
          src={getImageToShow()} 
          alt={product.name} 
          className="h-full w-full object-cover transition-opacity duration-300"
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
            {availableSizes.map((size) => (
              <button
                key={size}
                className={`px-3 py-1 text-xs rounded-full ${
                  selectedSize === size 
                    ? 'bg-brand-yellow text-brand-navy font-semibold' 
                    : 'bg-gray-100 text-gray-700'
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
          {getPieceCount(selectedSize) && (
            <p className="text-xs text-gray-500 mt-1">({getPieceCount(selectedSize)})</p>
          )}
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

        {/* Rakhi Offer Note */}
        <div className="mt-3 p-2 bg-gradient-to-r from-pink-50 to-orange-50 border border-pink-200 rounded-md">
          <p className="text-xs text-pink-700 font-medium">
            🎉 Rakhi Special: Get a FREE 250gm sweet on orders above ₹699! (5th-15th Aug)
          </p>
        </div>

        {product.id === 'bobbatlu' && (
          <div className="mt-3 p-2 bg-orange-50 border border-orange-200 rounded-md">
            <p className="text-xs text-orange-700 font-medium">
              ⚠️ Available only for delivery within Hyderabad
            </p>
          </div>
        )}
        
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
