
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    deliveryDate: '',
    paymentMethod: 'cod'
  });

  const handleQuantityChange = (
    productId: string, 
    size: '250g' | '500g' | '1kg', 
    newQuantity: number
  ) => {
    if (newQuantity < 1) return;
    updateQuantity(productId, size, newQuantity);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically handle the order submission
    // Since we don't have a backend integration yet, just show a toast
    toast({
      title: "Order placed successfully!",
      description: "Your order has been placed and will be processed soon.",
    });
    
    // Simulate order confirmation and redirect to WhatsApp
    setTimeout(() => {
      const message = `Hello! I just placed an order with House of Foods.\n\nOrder Details:\n${cartItems.map(item => `${item.quantity}x ${item.product.name} (${item.size})`).join('\n')}\n\nTotal: ₹${getCartTotal()}\n\nName: ${formData.name}\nPhone: ${formData.phone}\nDelivery on: ${formData.deliveryDate}`;
      const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      clearCart();
      window.location.href = '/thank-you';
    }, 1500);
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
        
        {/* Checkout Form */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-xl font-semibold text-brand-navy mb-4">Checkout</h2>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Delivery Address</label>
                  <textarea
                    id="address"
                    name="address"
                    rows={3}
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="deliveryDate" className="block text-sm font-medium text-gray-700 mb-1">Delivery Date</label>
                  <input
                    type="date"
                    id="deliveryDate"
                    name="deliveryDate"
                    value={formData.deliveryDate}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
                  <select
                    id="paymentMethod"
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                    required
                  >
                    <option value="cod">Cash on Delivery</option>
                    <option value="online">Online Payment</option>
                    <option value="upi">UPI</option>
                  </select>
                </div>
              </div>
              <div className="mt-8">
                <Button 
                  type="submit"
                  className="w-full bg-brand-yellow hover:bg-yellow-500 text-brand-navy"
                >
                  Place Order
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
