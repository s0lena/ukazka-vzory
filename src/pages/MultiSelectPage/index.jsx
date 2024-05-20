import { List } from './components/List';
import './style.css';
import { useState } from 'react';

export const MultiSelectPage = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div className="container">
      <h1>Výběr více položek</h1>
      <List selected={setCounter} />
      <p>Vybrano: {counter} polozky</p>
    </div>
  );
};
