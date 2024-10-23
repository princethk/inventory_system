import { useState } from 'react';
import axios from 'axios';

interface InventoryFormProps {
  fetchInventory: () => void;
}

const InventoryForm: React.FC<InventoryFormProps> = ({ fetchInventory }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [lowStockWarning, setLowStockWarning] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/inventory', { name, quantity, lowStockWarning });
      fetchInventory();
    } catch (err) {
      console.error('Failed to add item');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
      <input type="number" placeholder="Quantity" value={quantity} onChange={e => setQuantity(Number(e.target.value))} required />
      <input type="number" placeholder="Low Stock Warning" value={lowStockWarning} onChange={e => setLowStockWarning(Number(e.target.value))} required />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default InventoryForm;
