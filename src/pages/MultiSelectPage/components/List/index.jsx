import { useEffect, useState } from 'react';
import { ListItem } from '../ListItem';

export const List = ({selected}) => {
  const [items, setItems] = useState(null);
  const [selectedItems, setSelectedItems] = useState(null)
    
 

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('http://localhost:4000/api/items');
      const data = await response.json();
      setItems(data.result);
    };

    fetchItems();
  }, []);

  if (items === null) {
    return <p>Loading...</p>;
  }

const addItem = (isSelected) => {
 /* skratka

  const toAdd=isSelected ? 1: -1
  setSelectedItems(selectedItems+toAdd);
  selected(selectedItems+toAdd); */

  if (isSelected) {
    setSelectedItems(selectedItems+1)
    selected(selectedItems+1)
  }
  else {
  setSelectedItems(selectedItems-1)
  selected(selectedItems-1)
}
}
  return (
    <div className="list">
      {items.map((item) => (
        <ListItem key={item.id} item={item} onSelect={addItem} />
      ))}
    </div>
  );
};
