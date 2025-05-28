
import React from 'react';
import { useOrder } from '@/contexts/OrderContext';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const OrderHistory: React.FC = () => {
  const { orders } = useOrder();

  if (orders.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-brand-navy mb-8">Order History</h1>
        <div className="text-center py-16">
          <p className="text-xl text-gray-600">No orders found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-brand-navy mb-8">Order History</h1>
      
      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold">Order #{order.id}</h3>
                <p className="text-sm text-gray-600">Customer ID: {order.customerId}</p>
                <p className="text-sm text-gray-600">Date: {order.date.toLocaleDateString()}</p>
              </div>
              <div className="text-right">
                <Badge variant={order.status === 'delivered' ? 'default' : 'secondary'}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </Badge>
                <p className="text-sm text-gray-600 mt-1">
                  Payment: {order.paymentMode === 'cod' ? 'Cash on Delivery' : 'Online Payment'}
                </p>
              </div>
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {order.items.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.product.name}</TableCell>
                    <TableCell>{item.size}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>₹{item.product.prices[item.size]}</TableCell>
                    <TableCell>₹{item.product.prices[item.size] * item.quantity}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            <div className="text-right mt-4">
              <p className="text-lg font-semibold">Total: ₹{order.total}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
