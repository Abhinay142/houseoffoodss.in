
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, X } from "lucide-react";

interface GoToCartPopupProps {
  open: boolean;
  onClose: () => void;
}

const GoToCartPopup: React.FC<GoToCartPopupProps> = ({ open, onClose }) => {
  if (!open) return null;
  
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white shadow-xl rounded-lg p-6 mx-4 flex items-center gap-4 animate-fade-in">
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
    </div>
  );
};

export default GoToCartPopup;
