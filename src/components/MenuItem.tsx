import React from 'react';

interface MenuItemProps {
  item: { name: string; price: number };
  addItem: (item: { name: string; price: number }) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, addItem }) => {
  return (
    <button className="menu-item" onClick={() => addItem(item)}>
      {item.name} - {item.price} KGS
    </button>
  );
};

export default MenuItem;