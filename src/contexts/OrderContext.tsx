
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem } from './CartContext';

export interface Order {
  id: string;
  customerId: string;
  items: CartItem[];
  total: number;
  paymentMode: 'cod' | 'online';
  date: Date;
  status: 'pending' | 'confirmed' | 'delivered';
}

type OrderContextType = {
  orders: Order[];
  addOrder: (items: CartItem[], total: number, paymentMode: 'cod' | 'online') => Order;
  getOrderById: (orderId: string) => Order | undefined;
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  const generateId = () => {
    return Math.random().toString(36).substr(2, 9).toUpperCase();
  };

  const addOrder = (items: CartItem[], total: number, paymentMode: 'cod' | 'online'): Order => {
    const order: Order = {
      id: `ORD${generateId()}`,
      customerId: `CUST${generateId()}`,
      items,
      total,
      paymentMode,
      date: new Date(),
      status: 'pending'
    };

    setOrders(prevOrders => [order, ...prevOrders]);
    return order;
  };

  const getOrderById = (orderId: string) => {
    return orders.find(order => order.id === orderId);
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, getOrderById }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};
