import React from 'react';

interface OrderDetailsProps {
  order: { name: string; price: number; quantity: number }[];
  removeItem: (name: string) => void;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ order, removeItem }) => {
  const totalPrice = order.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="order-details">
      <h2>Order Details:</h2>
      {order.length === 0 ? (
        <p>No items in the order.</p>
      ) : (
        <ul>
          {order.map((item) => (
            <li key={item.name}>
              {item.name} x{item.quantity} {item.price * item.quantity} KGS
              <button onClick={() => removeItem(item.name)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total price: {totalPrice} KGS</h3>
    </div>
  );
};

export default OrderDetails;