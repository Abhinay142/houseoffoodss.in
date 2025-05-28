
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface GoToCartPopupProps {
  open: boolean;
  onClose: () => void;
}

const GoToCartPopup: React.FC<GoToCartPopupProps> = ({ open, onClose }) => {
  const { getCartCount } = useCart();
  
  // Don't show popup if cart is empty
  if (!open || getCartCount() === 0) return null;
  
  return (
    <div className="fixed inset-x-0 bottom-8 flex justify-center z-50">
      <div className="bg-white shadow-xl rounded-lg p-6 mx-4 flex items-center gap-4 animate-fade-in relative">
        {/* Cart count badge */}
        <div className="absolute -top-2 -left-2 bg-brand-yellow text-brand-navy text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
          {getCartCount()}
        </div>
        
        <Link to="/cart">
          <Button className="bg-brand-yellow text-brand-navy hover:bg-yellow-500">Go to Cart</Button>
        </Link>
        <button
          className="rounded-full p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100" 
          onClick={onClose}
          aria-label="Close"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default GoToCartPopup;
