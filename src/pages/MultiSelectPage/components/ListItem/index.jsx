import { useState } from 'react';

export const ListItem = ({ item, onSelect }) => {
  const [selected, setSelected] = useState(false);
  
  const toggleSelected = () => {
    setSelected(!selected);
    onSelect(!selected);
    
  };

  return (
    <div
      className={`panel${selected ? ' panel--selected' : ''}`}
      onClick={toggleSelected}
    >
      {item.name}
    </div>
  );
};
