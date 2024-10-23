import InventoryList from '../components/InventoryList';
import InventoryForm from '../components/InventoryForm';

const InventoryPage: React.FC = () => {
  return (
    <div>
      <InventoryForm fetchInventory={() => {}} />
      <InventoryList />
    </div>
  );
};

export default InventoryPage;
