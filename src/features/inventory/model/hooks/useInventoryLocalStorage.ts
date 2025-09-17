import type { InventoryItem } from "../types/inventoryItem";

const INVENTORY_ITEMS_KEY = "inventory-items";
const EMPTY_DATA = "{}";

export const useInventoryLocalStorage = () => {
  const data = localStorage.getItem(INVENTORY_ITEMS_KEY) ?? EMPTY_DATA;

  const setItems = (items: Record<string, InventoryItem>) =>
    localStorage.setItem(INVENTORY_ITEMS_KEY, JSON.stringify(items));

  const getItems = () => JSON.parse(data) as Record<string, InventoryItem>;

  return {
    data: JSON.parse(data) as Record<string, InventoryItem>,
    setItems,
    getItems,
  };
};
