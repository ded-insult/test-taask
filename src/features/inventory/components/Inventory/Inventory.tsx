import { MOCK_INVENTORY } from "../../mock/data";
import { useInventory } from "../../model/hooks/useInventory";
import { useInventoryLocalStorage } from "../../model/hooks/useInventoryLocalStorage";
import type { InventoryItem } from "../../model/types/inventoryItem";
import { InventorySummary } from "./InventorySummary";
import { InventoryTable } from "./InventoryTable";

export const Inventory = () => {
  const { onDecrease, onIncrease, onDelete } = useInventory();
  const { data: localStorageItems, setItems } = useInventoryLocalStorage();

  const control = {
    onDecrease: (item: InventoryItem) => onDecrease(item, setItems),
    onDelete: (item: InventoryItem) => onDelete(item, setItems),
    onIncrease: (item: InventoryItem) => onIncrease(item, setItems),
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <InventoryTable
        onDecrease={control.onDecrease}
        onDelete={control.onDelete}
        onIncrease={control.onIncrease}
        items={MOCK_INVENTORY}
      />

      <InventorySummary items={localStorageItems} />
    </div>
  );
};
