import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface GoToCartPopupProps {
  open: boolean;
  onClose: () => void;
}

const GoToCartPopup: React.FC<GoToCartPopupProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed bottom-8 right-8 bg-white shadow-xl rounded-lg p-4 z-50 flex items-center gap-4">
      <span className="font-medium">Item added to cart!</span>
      <Link to="/cart">
        <Button className="bg-brand-yellow text-brand-navy">Go to Cart</Button>
      </Link>
      <button className="ml-2 text-gray-400 hover:text-gray-600" onClick={onClose}>&times;</button>
    </div>
  );
};

export default GoToCartPopup;
