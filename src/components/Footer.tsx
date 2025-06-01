
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return <footer className="bg-brand-navy text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src="/lovable-uploads/c86cdcf2-ee05-4bd8-a17a-8267e61d313d.png" alt="House of Foods Store" className="h-16 mb-4" />
            <p className="text-sm">Just like mom made!</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-brand-yellow transition-colors">Home</Link></li>
              <li><Link to="/menu" className="hover:text-brand-yellow transition-colors">Menu</Link></li>
              <li><Link to="/about" className="hover:text-brand-yellow transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-brand-yellow transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">Email: houseoffoods.in@gmail.com</p>
            <p className="mb-2">Phone: +91 6304226513</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.instagram.com/houseoffoods.in?igsh=MWtzNXoyeDk1c3FqeA==" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://wa.me/916304226513" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 22.16C6.398 22.16 1.64 17.4 1.64 11.8c0-5.602 4.758-10.36 10.36-10.36 5.602 0 10.36 4.758 10.36 10.36 0 5.602-4.758 10.36-10.36 10.36m0-18.34C7.08 3.82 3.1 7.8 3.1 11.8c0 4 3.98 7.98 8.9 7.98 4.92 0 8.9-3.98 8.9-8.9S16.02 3.82 12 3.82"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">© 2025 House of Foods Store. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};

export default Footer;
