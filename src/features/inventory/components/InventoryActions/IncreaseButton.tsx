import type { InventoryAction } from "../../model/types/InventoryActions";

export const IncreaseButton = ({
  item,
  onIncrease,
}: InventoryAction<"increase">) => (
  <button
    type="button"
    aria-label="increase"
    className={"px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 "}
    onClick={() => onIncrease(item)}
  >
    +
  </button>
);
