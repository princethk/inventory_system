import { Request, Response } from 'express';
import { getAllItems, addItem, updateItem, deleteItem, getLowStockItems } from '../models/inventoryModel';

export const getInventory = async (req: Request, res: Response) => {
  try {
    const items = await getAllItems();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch inventory items' });
  }
};

export const createInventoryItem = async (req: Request, res: Response) => {
  try {
    const { name, quantity, lowStockWarning } = req.body;
    await addItem({ name, quantity, lowStockWarning });
    res.status(201).json({ message: 'Item added successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add item' });
  }
};

export const updateInventoryItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, quantity, lowStockWarning } = req.body;
    await updateItem(Number(id), { name, quantity, lowStockWarning });
    res.status(200).json({ message: 'Item updated successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update item' });
  }
};

export const deleteInventoryItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteItem(Number(id));
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete item' });
  }
};

export const getLowStockItemsController = async (req: Request, res: Response) => {
  try {
    const items = await getLowStockItems();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch low stock items' });
  }
};
