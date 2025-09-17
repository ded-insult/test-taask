import type { InventoryAction } from "../../model/types/InventoryActions";

export const DecreaseButton = ({
  item,
  onDecrease,
}: InventoryAction<"decrease">) => (
  <button
    type="button"
    aria-label="decrease"
    className={"px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 "}
    onClick={() => onDecrease(item)}
  >
    -
  </button>
);
