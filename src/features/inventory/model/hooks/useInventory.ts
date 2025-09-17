import { useState } from "react";
import type { InventoryItem } from "../types/inventoryItem";
import { useInventoryLocalStorage } from "./useInventoryLocalStorage";

type Persist = (next: Record<string, InventoryItem>) => void;

export const useInventory = () => {
  const { getItems } = useInventoryLocalStorage();
  const [items, setItems] = useState<Record<string, InventoryItem>>(getItems);

  const handleAddItem = (item: InventoryItem, persist?: Persist) => {
    setItems((prev) => {
      const exists = prev[item.id];
      const next: Record<string, InventoryItem> = exists
        ? {
            ...prev,
            [item.id]: {
              ...exists,
              quantity: exists.quantity + 1,
            },
          }
        : {
            ...prev,
            [item.id]: {
              id: item.id,
              name: item.name,
              icon: item.icon,
              weight: item.weight,
              quantity: 1,
            },
          };
      persist?.(next);
      return next;
    });
  };

  const handleDecreaaseItem = (item: InventoryItem, persist?: Persist) => {
    setItems((prev) => {
      const current = prev[item.id];
      if (!current) return prev;
      if (current.quantity > 1) {
        const next = {
          ...prev,
          [item.id]: { ...current, quantity: current.quantity - 1 },
        };
        persist?.(next);
        return next;
      }
      const { [item.id]: _, ...rest } = prev;
      persist?.(rest);
      return rest;
    });
  };

  const handleRemoveItem = (item: InventoryItem, persist?: Persist) => {
    setItems((prev) => {
      const { [item.id]: _, ...rest } = prev;
      persist?.(rest);
      return rest;
    });
  };

  return {
    onIncrease: handleAddItem,
    onDecrease: handleDecreaaseItem,
    onDelete: handleRemoveItem,
    state: items,
  };
};
