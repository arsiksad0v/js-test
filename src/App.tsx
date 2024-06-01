import React, { useState } from 'react';
import OrderDetails from './components/OrderDetails';
import AddItems from './components/AddItems';
import './App.css';

const App: React.FC = () => {
  const [order, setOrder] = useState<{ name: string; price: number; quantity: number }[]>([]);

  const addItem = (item: { name: string; price: number }) => {
    setOrder((prevOrder) => {
      const existingItem = prevOrder.find((orderItem) => orderItem.name === item.name);
      if (existingItem) {
        return prevOrder.map((orderItem) =>
          orderItem.name === item.name ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem
        );
      } else {
        return [...prevOrder, { ...item, quantity: 1 }];
      }
    });
  };

  const removeItem = (name: string) => {
    setOrder((prevOrder) => prevOrder.filter((orderItem) => orderItem.name !== name));
  };

  return (
    <div className="app">
      <OrderDetails order={order} removeItem={removeItem} />
      <AddItems addItem={addItem} />
    </div>
  );
};

export default App;
