
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ThankYou: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="text-5xl mb-6">🎉</div>
        <h1 className="text-3xl font-bold text-brand-navy mb-4">Thank You for Your Order!</h1>
        <p className="text-gray-600 mb-6">
          Your order has been placed successfully. We have sent you a confirmation message on WhatsApp.
        </p>
        <p className="text-gray-600 mb-8">
          If you have any questions about your order, feel free to contact us via WhatsApp or call us at 9876543210.
        </p>
        <Link to="/">
          <Button className="bg-brand-yellow hover:bg-yellow-500 text-brand-navy">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
