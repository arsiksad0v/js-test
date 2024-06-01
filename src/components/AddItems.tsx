import React from 'react';
import MenuItem from './MenuItem';

interface AddItemsProps {
  addItem: (item: { name: string; price: number }) => void;
}

const AddItems: React.FC<AddItemsProps> = ({ addItem }) => {
  const menuItems = [
    { name: 'Hamburger', price: 80 },
    { name: 'Cheeseburger', price: 90 },
    { name: 'Fries', price: 45 },
    { name: 'Coffee', price: 70 },
    { name: 'Tea', price: 50 },
    { name: 'Cola', price: 40 },
  ];

  return (
    <div className="add-items">
      <h2>Add items:</h2>
      {menuItems.map((item) => (
        <MenuItem key={item.name} item={item} addItem={addItem} />
      ))}
    </div>
  );
};

export default AddItems;
