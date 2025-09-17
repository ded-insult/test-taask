import type { InventoryItem } from "../../model/types/inventoryItem";

type InventorySummaryProps = {
  items: Record<string, InventoryItem>;
};

export const InventorySummary = ({ items }: InventorySummaryProps) => {
  const totalQuantity = Object.values(items).reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  const totalWeight = Object.values(items).reduce(
    (sum, item) => sum + item.weight * item.quantity,
    0
  );

  return (
    <>
      <div className="mt-4 flex items-center justify-between rounded border border-gray-200 p-3 bg-white">
        <div className="text-sm">
          <span className="font-medium">Суммарное количество: </span>
          <span>{totalQuantity}</span>
        </div>
        <div className="text-sm">
          <span className="font-medium">Суммарный вес: </span>
          <span>{totalWeight.toFixed(2)}</span>
        </div>
      </div>

      {Object.entries(items).map(([key, { name, weight, quantity }]) => (
        <div
          key={key}
          className={
            "flex items-center justify-between rounded border border-gray-200 bg-white px-3 py-2"
          }
        >
          <div className="min-w-0">
            <h3 className="text-sm font-medium truncate">{name}</h3>
            <p className="text-xs text-gray-500">Вес: {weight}</p>
          </div>
          <p className="text-sm font-semibold">x{quantity}</p>
        </div>
      ))}
    </>
  );
};
