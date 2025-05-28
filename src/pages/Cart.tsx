
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  const handleQuantityChange = (
    productId: string, 
    size: '250g' | '500g' | '1kg', 
    newQuantity: number
  ) => {
    if (newQuantity < 1) {
      removeFromCart(productId, size);
      return;
    }
    updateQuantity(productId, size, newQuantity);
  };

  const handleBuyOnWhatsApp = () => {
    // Construct WhatsApp message with order details
    const message = `Hello! I would like to place an order:

Order Details:
${cartItems.map(item => 
  `• ${item.product.name} (${item.size}) - Qty: ${item.quantity} - ₹${item.product.prices[item.size] * item.quantity}`
).join('\n')}

Total Amount: ₹${getCartTotal()}

Please confirm my order. Thank you!`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/916304226513?text=${encodedMessage}`, '_blank');
    
    // Clear cart after sending message
    clearCart();
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-brand-navy mb-6">Your Cart</h1>
        <p className="text-xl text-gray-600 mb-8">Your cart is empty.</p>
        <Link to="/menu">
          <Button className="bg-brand-yellow hover:bg-yellow-500 text-brand-navy">
            Browse Products
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-brand-navy mb-6">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Cart Items */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold text-brand-navy mb-4">Cart Items</h2>
            {cartItems.map((item) => (
              <div 
                key={`${item.product.id}-${item.size}`} 
                className="flex items-center border-b border-gray-100 py-4 last:border-0"
              >
                <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center mr-4">
                  <img 
                    src={item.product.image} 
                    alt={item.product.name} 
                    className="h-12 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder.svg';
                    }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-brand-navy">{item.product.name}</h3>
                  <p className="text-sm text-gray-600">Size: {item.size}</p>
                  <p className="text-sm text-gray-600">Price: ₹{item.product.prices[item.size]}</p>
                </div>
                <div className="flex items-center">
                  <button 
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                    onClick={() => handleQuantityChange(item.product.id, item.size, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span className="mx-3">{item.quantity}</span>
                  <button 
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                    onClick={() => handleQuantityChange(item.product.id, item.size, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <div className="text-right ml-4">
                  <p className="text-lg font-semibold text-brand-navy">₹{item.product.prices[item.size] * item.quantity}</p>
                  <button 
                    className="text-sm text-red-500 mt-1"
                    onClick={() => removeFromCart(item.product.id, item.size)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center mt-6 pt-6 border-t">
              <p className="text-gray-600">Subtotal</p>
              <p className="text-xl font-semibold text-brand-navy">₹{getCartTotal()}</p>
            </div>
          </div>
          
          {/* Continue Shopping */}
          <Link to="/menu">
            <Button variant="outline" className="mb-6">
              Continue Shopping
            </Button>
          </Link>
        </div>
        
        {/* Buy on WhatsApp Section */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-xl font-semibold text-brand-navy mb-4">Order Summary</h2>
            
            <div className="space-y-2 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Items ({cartItems.reduce((count, item) => count + item.quantity, 0)})</span>
                <span className="font-medium">₹{getCartTotal()}</span>
              </div>
              <div className="flex justify-between text-lg font-semibold text-brand-navy pt-2 border-t">
                <span>Total</span>
                <span>₹{getCartTotal()}</span>
              </div>
            </div>
            
            <Button 
              onClick={handleBuyOnWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 22.16C6.398 22.16 1.64 17.4 1.64 11.8c0-5.602 4.758-10.36 10.36-10.36 5.602 0 10.36 4.758 10.36 10.36 0 5.602-4.758 10.36-10.36 10.36m0-18.34C7.08 3.82 3.1 7.8 3.1 11.8c0 4 3.98 7.98 8.9 7.98 4.92 0 8.9-3.98 8.9-8.9S16.02 3.82 12 3.82"/>
              </svg>
              Buy on WhatsApp
            </Button>
            
            <p className="text-xs text-gray-500 mt-2 text-center">
              You'll be redirected to WhatsApp to complete your order
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
