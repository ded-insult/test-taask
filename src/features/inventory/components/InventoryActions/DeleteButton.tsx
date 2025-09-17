import type { InventoryAction } from "../../model/types/InventoryActions";

export const DeleteButton = ({ item, onDelete }: InventoryAction<"delete">) => (
  <button
    type="button"
    aria-label="delete"
    className={"px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 "}
    onClick={() => onDelete(item)}
  >
    Удалить
  </button>
);
