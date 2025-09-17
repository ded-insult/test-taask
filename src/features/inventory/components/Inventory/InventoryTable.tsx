import { InventoryRow } from "./InventoryRow";
import type { InventoryItem } from "../../model/types/inventoryItem";
import { InventoryActions } from "../InventoryActions/InventoryActions";

type InventoryTableProps = {
  items: InventoryItem[];
  onDelete: (item: InventoryItem) => void;
  onDecrease: (item: InventoryItem) => void;
  onIncrease: (item: InventoryItem) => void;
};

export const InventoryTable = ({
  items,
  onDecrease,
  onDelete,
  onIncrease,
}: InventoryTableProps) => (
  <div className="overflow-x-auto">
    <table className="min-w-full border border-gray-200 rounded-md overflow-hidden">
      <thead className="bg-gray-50">
        <tr>
          <th className="text-left p-2 font-semibold">Картинка</th>
          <th className="text-left p-2 font-semibold">Название</th>
          <th className="text-center p-2 font-semibold">Количество</th>
          <th className="text-center p-2 font-semibold">Вес</th>
          <th className="text-right p-2 font-semibold">Действия</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <InventoryRow key={item.id} item={item}>
            <InventoryActions
              item={item}
              onDelete={onDelete}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
            />
          </InventoryRow>
        ))}
      </tbody>
    </table>
  </div>
);
