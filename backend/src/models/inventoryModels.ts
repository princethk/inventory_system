import pool from '../db';

export interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
  lowStockWarning: number;
}

export const getAllItems = async (): Promise<InventoryItem[]> => {
  const result = await pool.query('SELECT * FROM inventory');
  return result.rows;
};

export const addItem = async (item: Omit<InventoryItem, 'id'>): Promise<void> => {
  await pool.query('INSERT INTO inventory (name, quantity, lowStockWarning) VALUES ($1, $2, $3)', 
    [item.name, item.quantity, item.lowStockWarning]);
};

export const updateItem = async (id: number, item: Omit<InventoryItem, 'id'>): Promise<void> => {
  await pool.query('UPDATE inventory SET name = $1, quantity = $2, lowStockWarning = $3 WHERE id = $4', 
    [item.name, item.quantity, item.lowStockWarning, id]);
};

export const deleteItem = async (id: number): Promise<void> => {
  await pool.query('DELETE FROM inventory WHERE id = $1', [id]);
};

export const getLowStockItems = async (): Promise<InventoryItem[]> => {
  const result = await pool.query('SELECT * FROM inventory WHERE quantity <= lowStockWarning');
  return result.rows;
};
