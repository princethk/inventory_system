import { Router } from 'express';
import { getInventory, createInventoryItem, updateInventoryItem, deleteInventoryItem, getLowStockItemsController } from '../controllers/inventoryController';

const router = Router();

router.get('/', getInventory);
router.post('/', createInventoryItem);
router.put('/:id', updateInventoryItem);
router.delete('/:id', deleteInventoryItem);
router.get('/low-stock', getLowStockItemsController);

export default router;
