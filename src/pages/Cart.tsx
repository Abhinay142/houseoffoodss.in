
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface Address {
  customerName: string;
  flatNo: string;
  building: string;
  area: string;
  city: string;
  pinCode: string;
}

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [newAddress, setNewAddress] = useState<Address>({
    customerName: '',
    flatNo: '',
    building: '',
    area: '',
    city: '',
    pinCode: ''
  });

  // Sample saved addresses (in a real app, this would come from user data)
  const savedAddresses: Address[] = [
    {
      customerName: "John Doe",
      flatNo: "101",
      building: "Sunrise Apartments",
      area: "Banjara Hills",
      city: "Hyderabad",
      pinCode: "500034"
    },
    {
      customerName: "Jane Smith",
      flatNo: "205",
      building: "Green Valley",
      area: "Jubilee Hills",
      city: "Hyderabad",
      pinCode: "500033"
    }
  ];

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

  const handleAddressSelect = (value: string) => {
    if (value === 'new') {
      setShowAddressForm(true);
      setSelectedAddress(null);
    } else {
      const index = parseInt(value);
      setSelectedAddress(savedAddresses[index]);
      setShowAddressForm(false);
    }
  };

  const handleNewAddressSubmit = () => {
    if (newAddress.customerName && newAddress.flatNo && newAddress.building && newAddress.area && newAddress.city && newAddress.pinCode) {
      setSelectedAddress(newAddress);
      setShowAddressForm(false);
      // Reset form
      setNewAddress({
        customerName: '',
        flatNo: '',
        building: '',
        area: '',
        city: '',
        pinCode: ''
      });
    }
  };

  const handleBuyOnWhatsApp = () => {
    if (!selectedAddress) return;

    // Construct WhatsApp message with order details and address
    const message = `Hello! I would like to place an order:

Customer Name: ${selectedAddress.customerName}

Order Details:
${cartItems.map(item => 
  `• ${item.product.name} (${item.size}) - Qty: ${item.quantity} - ₹${item.product.prices[item.size] * item.quantity}`
).join('\n')}

Total Amount: ₹${getCartTotal()}

Delivery Address:
${selectedAddress.flatNo}, ${selectedAddress.building}
${selectedAddress.area}, ${selectedAddress.city}
PIN: ${selectedAddress.pinCode}

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
        
        {/* Order Summary and Address Section */}
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

            {/* Address Selection */}
            <div className="mb-6">
              <Label className="block mb-2 font-medium">Delivery Address</Label>
              <Select onValueChange={handleAddressSelect}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select delivery address" />
                </SelectTrigger>
                <SelectContent>
                  {savedAddresses.map((address, index) => (
                    <SelectItem key={index} value={index.toString()}>
                      {address.customerName} - {address.flatNo}, {address.building}, {address.area}
                    </SelectItem>
                  ))}
                  <SelectItem value="new">+ Add new address</SelectItem>
                </SelectContent>
              </Select>

              {selectedAddress && !showAddressForm && (
                <div className="mt-2 p-2 border rounded bg-gray-50 text-sm">
                  <p><span className="font-medium">Customer:</span> {selectedAddress.customerName}</p>
                  <p><span className="font-medium">Address:</span> {selectedAddress.flatNo}, {selectedAddress.building}</p>
                  <p><span className="font-medium">Area:</span> {selectedAddress.area}</p>
                  <p><span className="font-medium">City:</span> {selectedAddress.city}</p>
                  <p><span className="font-medium">PIN:</span> {selectedAddress.pinCode}</p>
                </div>
              )}

              {showAddressForm && (
                <div className="mt-4 space-y-3">
                  <div>
                    <Label htmlFor="customerName">Customer Name</Label>
                    <Input
                      id="customerName"
                      value={newAddress.customerName}
                      onChange={(e) => setNewAddress({...newAddress, customerName: e.target.value})}
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label htmlFor="flatNo">Flat/House No.</Label>
                      <Input
                        id="flatNo"
                        value={newAddress.flatNo}
                        onChange={(e) => setNewAddress({...newAddress, flatNo: e.target.value})}
                        placeholder="Flat/House Number"
                      />
                    </div>
                    <div>
                      <Label htmlFor="building">Building/Society</Label>
                      <Input
                        id="building"
                        value={newAddress.building}
                        onChange={(e) => setNewAddress({...newAddress, building: e.target.value})}
                        placeholder="Building/Society"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="area">Area/Locality</Label>
                    <Input
                      id="area"
                      value={newAddress.area}
                      onChange={(e) => setNewAddress({...newAddress, area: e.target.value})}
                      placeholder="Area/Locality"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        value={newAddress.city}
                        onChange={(e) => setNewAddress({...newAddress, city: e.target.value})}
                        placeholder="City"
                      />
                    </div>
                    <div>
                      <Label htmlFor="pinCode">PIN Code</Label>
                      <Input
                        id="pinCode"
                        value={newAddress.pinCode}
                        onChange={(e) => setNewAddress({...newAddress, pinCode: e.target.value})}
                        placeholder="PIN Code"
                      />
                    </div>
                  </div>
                  <Button 
                    className="w-full"
                    onClick={handleNewAddressSubmit}
                  >
                    Save Address
                  </Button>
                </div>
              )}
            </div>
            
            <Button 
              onClick={handleBuyOnWhatsApp}
              disabled={!selectedAddress}
              className={`w-full flex items-center justify-center gap-2 ${
                selectedAddress 
                  ? 'bg-green-500 hover:bg-green-600 text-white' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
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
