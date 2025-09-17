import type { InventoryItem } from "./inventoryItem";

type InventoryDeleteAction = {
  type: "delete";
  item: InventoryItem;
  onDelete: (item: InventoryItem) => void;
};

type InventoryIncreaseAction = {
  type: "increase";
  item: InventoryItem;
  onIncrease: (item: InventoryItem) => void;
};

type InventoryDecreaseAction = {
  type: "decrease";
  item: InventoryItem;
  onDecrease: (item: InventoryItem) => void;
};

type InventoryActionMap = {
  delete: Omit<InventoryDeleteAction, "type">;
  increase: Omit<InventoryIncreaseAction, "type">;
  decrease: Omit<InventoryDecreaseAction, "type">;
};

export type InventoryActionType = "delete" | "increase" | "decrease";

export type InventoryAction<T extends InventoryActionType> =
  InventoryActionMap[T];
