
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../data/products';

export type CartItem = {
  product: Product;
  quantity: number;
  size: '250g' | '500g' | '1kg';
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number, size: '250g' | '500g' | '1kg') => void;
  removeFromCart: (productId: string, size: '250g' | '500g' | '1kg') => void;
  updateQuantity: (productId: string, size: '250g' | '500g' | '1kg', quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product, quantity: number, size: '250g' | '500g' | '1kg') => {
    setCartItems(prevItems => {
      // Check if item already exists in cart
      const existingItemIndex = prevItems.findIndex(
        item => item.product.id === product.id && item.size === size
      );

      if (existingItemIndex !== -1) {
        // Update existing item
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        return updatedItems;
      } else {
        // Add new item
        return [...prevItems, { product, quantity, size }];
      }
    });
  };

  const removeFromCart = (productId: string, size: '250g' | '500g' | '1kg') => {
    setCartItems(prevItems => 
      prevItems.filter(item => !(item.product.id === productId && item.size === size))
    );
  };

  const updateQuantity = (productId: string, size: '250g' | '500g' | '1kg', quantity: number) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.product.id === productId && item.size === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = item.product.prices[item.size];
      return total + price * item.quantity;
    }, 0);
  };

  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider 
      value={{ 
        cartItems, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        clearCart, 
        getCartTotal,
        getCartCount 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
