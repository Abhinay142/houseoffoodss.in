
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, X } from "lucide-react";

interface GoToCartPopupProps {
  open: boolean;
  onClose: () => void;
}

const GoToCartPopup: React.FC<GoToCartPopupProps> = ({ open, onClose }) => {
  useEffect(() => {
    // Auto-hide after 5 seconds
    let timer: NodeJS.Timeout;
    
    if (open) {
      timer = setTimeout(() => {
        onClose();
      }, 5000);
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [open, onClose]);

  if (!open) return null;
  
  return (
    <div className="fixed bottom-8 right-8 bg-white shadow-xl rounded-lg p-4 z-50 flex items-center gap-4 animate-fade-in">
      <div className="flex items-center gap-2">
        <ShoppingCart size={20} className="text-brand-navy" />
        <span className="font-medium">Item added to cart!</span>
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
  );
};

export default GoToCartPopup;
