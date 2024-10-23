import { useState, useEffect } from 'react';
import axios from 'axios';

interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
  lowStockWarning: number;
}

const InventoryList: React.FC = () => {
  const [items, setItems] = useState<InventoryItem[]>([]);

  const fetchInventory = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/inventory');
      setItems(response.data);
    } catch (err) {
      console.error('Failed to fetch inventory');
    }
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  return (
    <div>
      <h1>Inventory List</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryList;
