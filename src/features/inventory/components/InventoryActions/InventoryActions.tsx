import type { InventoryItem } from "../../model/types/inventoryItem";
import { InventoryActionButton } from "./InventoryActionButton";

type InventoryActionsProps = {
  item: InventoryItem;
  onDecrease: (item: InventoryItem) => void;
  onIncrease: (item: InventoryItem) => void;
  onDelete: (item: InventoryItem) => void;
};

export const InventoryActions = ({
  item,
  onDelete,
  onIncrease,
  onDecrease,
}: InventoryActionsProps) => (
  <>
    <InventoryActionButton
      item={item}
      onDelete={onDelete}
      actionType="delete"
    />

    <InventoryActionButton
      item={item}
      onIncrease={onIncrease}
      actionType="increase"
    />

    <InventoryActionButton
      item={item}
      onDecrease={onDecrease}
      actionType="decrease"
    />
  </>
);
