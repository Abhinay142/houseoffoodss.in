import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Button } from './ui/button';
const Header: React.FC = () => {
  const {
    getCartCount
  } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/lovable-uploads/94326611-6ec3-41a2-98ba-14d7078af9e7.png" alt="House of Foods" className="h-16" />
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden text-brand-navy" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-brand-navy font-medium hover:text-brand-yellow transition-colors">
            Home
          </Link>
          <Link to="/menu" className="text-brand-navy font-medium hover:text-brand-yellow transition-colors">
            Menu
          </Link>
          <Link to="/about" className="text-brand-navy font-medium hover:text-brand-yellow transition-colors">
            About Us
          </Link>
          <Link to="/contact" className="text-brand-navy font-medium hover:text-brand-yellow transition-colors">
            Contact
          </Link>
          <Link to="/cart" className="relative">
            <Button variant="outline" className="flex items-center gap-2 bg-brand-beige text-brand-navy">
              <ShoppingCart size={20} />
              <span>Cart</span>
              {getCartCount() > 0 && <span className="absolute -top-2 -right-2 bg-brand-yellow text-brand-navy text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartCount()}
                </span>}
            </Button>
          </Link>
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <Link to="/" className="py-2 text-brand-navy font-medium hover:text-brand-yellow transition-colors" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/menu" className="py-2 text-brand-navy font-medium hover:text-brand-yellow transition-colors" onClick={() => setIsMenuOpen(false)}>
              Menu
            </Link>
            <Link to="/about" className="py-2 text-brand-navy font-medium hover:text-brand-yellow transition-colors" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/contact" className="py-2 text-brand-navy font-medium hover:text-brand-yellow transition-colors" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <Link to="/cart" className="py-2 text-brand-navy font-medium hover:text-brand-yellow transition-colors" onClick={() => setIsMenuOpen(false)}>
              Cart ({getCartCount()})
            </Link>
          </div>
        </div>}
    </header>;
};
export default Header;